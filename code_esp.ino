#include <FirebaseArduino.h>
#include <ESP8266WiFi.h>

#define WIFI_SSID "brisa-395282"
#define WIFI_PASSWORD "kfxhp9mq"

#define FIREBASE_HOST "iot-tcc-01-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "3kwPCNtWRFLUuMzHt7fGD0NxXZqYOkDUy8Nxb36M"

#define ledPower  D5

void setup() {
  
  Serial.begin(9600);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  pinMode(ledPower, OUTPUT);
}

void loop(){

  //Firebase.pushFloat("umidadeSolo", umidadeSolo);
  int ledStatus = Firebase.getInt("botao");

  Serial.println(ledStatus);
  
  if(ledStatus == 1){
    
    digitalWrite(ledPower, HIGH);
    
  } else {
    
    digitalWrite(ledPower, LOW);
  }
}
