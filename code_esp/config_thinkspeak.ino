void enviaDados(int estadoBomba, int umidadeSolo, int temperatura, int umidadeAr){

  ThingSpeak.setField(1, estadoBomba);
  ThingSpeak.setField(2, umidadeSolo);
  ThingSpeak.setField(4, temperatura);
  ThingSpeak.setField(3, umidadeAr);
   
  int envia = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);
  
  if(envia == 200){
    
    Serial.println("Dados enviados com sucesso!");
    
  }
  else{
    
    Serial.print("Dados nao enviados. HTTP error code ");
    Serial.println(String(envia));
  }
  
  tempo = millis();
}
