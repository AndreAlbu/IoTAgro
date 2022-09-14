void enviaDados(int estadoBomba, int umidadeSolo, int temperatura, int umidadeAr){

  ThingSpeak.setField(1, estadoBomba);
  ThingSpeak.setField(2, umidadeSolo);
  ThingSpeak.setField(3, temperatura);
  ThingSpeak.setField(4, umidadeAr);
   
  int envia = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);
  
  if(envia == 200){
    
    Serial.println("Dados enviados com sucesso!");
    
  }
  else{
    
    Serial.println("Dados nao enviados. HTTP error code " + String(envia));
  }
  
  tempo = millis();
}
