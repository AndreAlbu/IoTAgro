void enviaDados(int botao, float umidadeSolo, float temperatura, float umidadeAr){

  ThingSpeak.setField(1, botao);
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
