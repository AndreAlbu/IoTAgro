#include <FirebaseArduino.h>
#include <ThingSpeak.h>
#include <ESP8266WiFi.h>

#define WIFI_SSID "brisa-395282"
#define WIFI_PASSWORD "kfxhp9mq"

unsigned long myChannelNumber = 1854739;
const char * myWriteAPIKey = "U8BZA001GV3S4YAB";

#define FIREBASE_HOST "iot-tcc-01-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "3kwPCNtWRFLUuMzHt7fGD0NxXZqYOkDUy8Nxb36M"

#define botao  D5

#define TEMPO_ENVIO 30000

unsigned long tempo;

WiFiClient client;

void enviaDados(int StatusBotao, float umidadeSolo, float temperaturaAr, float umidadeAr);

void setup() {
  
  Serial.begin(9600);
  
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
  
  pinMode(botao, OUTPUT);
}

void loop(){

    char fields_a_serem_enviados[100] = {0};
  
    float umidadeSolo = 10.0;
    float temperaturaAr = 9.0;
    float umidadeAr = 8.0;
  
    Firebase.setFloat("umidadeSolo", umidadeSolo);
    Firebase.setFloat("temperaturaAr", temperaturaAr);
    Firebase.setFloat("umidadeAr", umidadeAr);
  
    //Firebase.pushFloat("umidadeAr", umidadeAr);
      
    int StatusBotao = Firebase.getInt("botao");
      
    if(StatusBotao == 1){
      
      digitalWrite(botao, HIGH);
      
    } else {
      
      digitalWrite(botao, LOW);
    }

    if(millis() - tempo > TEMPO_ENVIO){
 
      enviaDados(StatusBotao, umidadeSolo, temperaturaAr, umidadeAr);
      
    }
}
