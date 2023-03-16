#include <FirebaseArduino.h>
#include <ThingSpeak.h>
#include <ESP8266WiFi.h>
#include <DHT.h>
#include <Adafruit_Sensor.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <time.h>


/*
#define WIFI_SSID "brisa-395282"
#define WIFI_PASSWORD "kfxhp9mq"
*/
#define WIFI_SSID "brisa-170778"
#define WIFI_PASSWORD "bekyfz8o"

unsigned long myChannelNumber = 1854739;
const char * myWriteAPIKey = "U8BZA001GV3S4YAB";

#define FIREBASE_HOST "iot-tcc-01-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "3kwPCNtWRFLUuMzHt7fGD0NxXZqYOkDUy8Nxb36M"

int bomba = D5;
int valorSensor = A0;

DHT dht(D3, DHT11);

#define TEMPO_ENVIO 30000

unsigned long tempo;

//Ntp client
const long utcOffsetInSeconds = -10800;

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", utcOffsetInSeconds);

WiFiClient client;

void enviaDados(int StatusBotao, int umidadeSolo, int temperaturaAr, int umidadeAr);

void ligaBomba(int porta, int tempoMaximo);
void desligaBomba(int porta);

void acionamento(int acionamentoManual, int limite, int umidadeSolo, int tempoMaximo, int totalSegundos);

int converteHora(String dateTime);

//Declarando as variaveis

int acionamentoManual = 0, acionamentoSensor = 0, estadoBomba = 0, limite = 0, tempoMaximo = 0, horaAtualCalculo = 0, horaDesligar = 0; 
String horaAtual;

void setup() {
  
  Serial.begin(9600);
    
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
}

void loop(){
  
    int temperaturaAr = 0; 
    int umidadeAr = 0;
    int umidadeSolo = 0;
    
    acionamentoManual = Firebase.getInt("acionamentoManual");
    limite = Firebase.getInt("limite");
    tempoMaximo = Firebase.getInt("tempoMaximo");
    horaDesligar = Firebase.getInt("horaFimRega");

    Serial.println("Acionamento: " + String(acionamentoManual));
    
    timeClient.forceUpdate();

    horaAtual = timeClient.getFormattedTime();
    
    horaAtualCalculo = converteHora(horaAtual);

    Serial.println("Hora atual: " + String(horaAtualCalculo));

    umidadeSolo = analogRead(valorSensor);
    temperaturaAr = dht.readTemperature();
    umidadeAr = dht.readHumidity();
    
    Serial.println("Umidade Solo: " + String(umidadeSolo));
    Serial.println("Temperatura: " + String(temperaturaAr));
    Serial.println("Umidade Ar: " + String(umidadeAr));

    acionamento(acionamentoManual, limite, umidadeSolo, horaDesligar, horaAtualCalculo);

    Firebase.setInt("umidadeSolo", umidadeSolo);
    Firebase.setInt("temperaturaAr", temperaturaAr);
    Firebase.setInt("umidadeAr", umidadeAr);
    
    if(millis() - tempo > TEMPO_ENVIO){
 
      enviaDados(estadoBomba, umidadeSolo, temperaturaAr, umidadeAr);
      
    }

    delay(2000);
}
