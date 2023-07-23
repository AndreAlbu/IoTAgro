#include <FirebaseArduino.h>
#include <ThingSpeak.h>
#include <ESP8266WiFi.h>
#include <ESP.h>; 
#include <DHT.h>
#include <Adafruit_Sensor.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <time.h>

/*
#define WIFI_SSID "brisa-395282"
#define WIFI_PASSWORD "kfxhp9mq"
#define WIFI_SSID "brisa-170778"
#define WIFI_PASSWORD "bekyfz8o"
*/
#define WIFI_SSID "MOB-ANDRE LUIS"
#define WIFI_PASSWORD "teuolho1010"

unsigned long myChannelNumber = 1854739;
const char * myWriteAPIKey = "U8BZA001GV3S4YAB";

#define FIREBASE_HOST "iot-tcc-01-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "3kwPCNtWRFLUuMzHt7fGD0NxXZqYOkDUy8Nxb36M"

int bomba = D5;
int valorSensor = A0;

DHT dht(D3, DHT11);

#define TEMPO_ENVIO 30000

unsigned long tempo;

//Ntp cliente
const long utcOffsetInSeconds = -10800;

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", utcOffsetInSeconds);

WiFiClient client;

void enviaDados(int StatusBotao, int umidadeSolo, int temperaturaAr, int umidadeAr);

void ligaBomba(int porta, int tempoMaximo);
void desligaBomba(int porta);

void acionamento(int acionamentoManual, int limite, int umidadeSolo, int tempoMaximo, int totalSegundos);

int converteHora(String dateTime);
int converteValorSensor(int sensor);

//Declarando as variaveis

int acionamentoManual = 0, acionamentoSensor = 0, estadoBomba = 0, limite = 0, tempoMaximo = 0, horaAtualCalculo = 0, horaDesligar = 0; 
String horaAtual;

const int qtdLeituras = 10;
int leituraFeitas[qtdLeituras];
int mediaLeituras = 0, controle = 0;


void WDT_(unsigned long Duration){
  
  ESP.wdtDisable();
  unsigned long prevTime = millis();
  while (millis() - prevTime < Duration) {
    ESP.wdtEnable(1000);
  } 
  
}

int converteValorSensor(int sensor){

  int UmidadePercentual;
  
  UmidadePercentual = 100 * (1 - ((float)(sensor - 485) / (765 - 485)));
  
  if(UmidadePercentual > 100){
  
    UmidadePercentual = 100;
  
  }
  else if(UmidadePercentual < 0){
  
    UmidadePercentual = 0;
  }
  
  return UmidadePercentual;
     
}

void setup() {
  
  Serial.begin(115200);
    
  pinMode(bomba, OUTPUT);
  pinMode(valorSensor, INPUT);
  
  tempo = 0;

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  
  Serial.print("Conectando");
  
  while (WiFi.status() != WL_CONNECTED) {
    
    Serial.print(".");
    
    delay(500);
  }
  
  Serial.println();
  Serial.print("Conectado: ");
  Serial.println(WiFi.localIP());

  ThingSpeak.begin(client);

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

  dht.begin();
  timeClient.begin();

  WDT_(10000);
}

void loop(){
  
    int temperaturaAr = 0; 
    int umidadeAr = 0;
    int umidadeSolo = 0;
    int sensorSolo = 0;
    
    acionamentoManual = Firebase.getInt("acionamentoManual");
    limite = Firebase.getInt("limite");
    tempoMaximo = Firebase.getInt("tempoMaximo");
    horaDesligar = Firebase.getInt("horaFimRega");

    Serial.print("Acionamento: "); 
    Serial.println(String(acionamentoManual));
    
    timeClient.forceUpdate();

    horaAtual = timeClient.getFormattedTime();
    
    horaAtualCalculo = converteHora(horaAtual);

    Serial.print("Hora atual: ");
    Serial.println(String(horaAtualCalculo));

    umidadeSolo = analogRead(valorSensor);

    sensorSolo = converteValorSensor(umidadeSolo);
    temperaturaAr = dht.readTemperature();
    umidadeAr = dht.readHumidity();

    if((temperaturaAr > 80) || (umidadeAr > 100)){
      
      Serial.println("Falha na leitura do DHT");
      temperaturaAr = Firebase.getInt("temperaturaAr");
      umidadeAr = Firebase.getInt("umidadeAr");
    }
 
    Serial.print("Umidade Solo: ");
    Serial.println(String(sensorSolo));
    Serial.print("Temperatura: ");
    Serial.println(String(temperaturaAr));
    Serial.print("Umidade Ar: ");
    Serial.println(String(umidadeAr));

    acionamento(acionamentoManual, limite, sensorSolo, horaDesligar, horaAtualCalculo);

    leituraFeitas[controle] = sensorSolo;

    Firebase.setInt("umidadeSolo", sensorSolo);
    Firebase.setInt("temperaturaAr", temperaturaAr);
    Firebase.setInt("umidadeAr", umidadeAr);
    
    if(millis() - tempo > TEMPO_ENVIO){

      int somaLeituras = 0;

      for (int i = 0; i < qtdLeituras; i++){
        
        somaLeituras += leituraFeitas[i];
      }

      int soloEnvia = somaLeituras / qtdLeituras;
      
      enviaDados(estadoBomba, sensorSolo, temperaturaAr, umidadeAr);

      somaLeituras = 0;
      
    }

    controle += 1;

    delay(3000);
}
