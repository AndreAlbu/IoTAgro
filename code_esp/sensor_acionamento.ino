int converteHora(String dateTime){

  int horaFinal;

  int hora = dateTime.substring(0, 2).toInt();
  int minutos = dateTime.substring(3, 5).toInt();
  int segundos = dateTime.substring(6, 8).toInt();
  
  horaFinal = hora * 3600 + minutos * 60 + segundos;

  return horaFinal;
  
}

void ligaBomba(int porta, int tempoMaximo){

  digitalWrite(porta, HIGH);

  int tempoInicial, tempoFinal; 

  if(estadoBomba == 0){
    
    String dateTime = timeClient.getFormattedTime();

    tempoInicial = converteHora(dateTime);
    
    Firebase.setInt("horaInicioRega", tempoInicial);
    
    tempoFinal = tempoInicial + tempoMaximo;
    
    if(tempoFinal >= 86400){
      
      tempoFinal -= 86400;
    }
    
    Firebase.setInt("horaFimRega", tempoFinal);
    
    Serial.println("Ligando bomba");
    
  }

  else{
    Serial.println("Bomba ligada");
  }
}

void desligaBomba(int porta){

  digitalWrite(porta, LOW);

  if(estadoBomba == 1){

    Firebase.setInt("horaInicioRega", 0);
    Firebase.setInt("horaFimRega", 0);
    
    Serial.println("Desligando bomba");
  }

  else{

    Serial.println("Bomba desligada");
  }
}

void acionamento(int acionamentoManual, int limite, int umidadeSolo, int horaDesligar, int horaAtual){

  if(horaAtual > horaDesligar && estadoBomba == 1){
    
    if(horaAtual > 18000 && horaDesligar <= 18000) {
      
      Serial.println("Ainda nao e hora");
      
    } else {
      
      acionamentoManual = 0;
      Firebase.setInt("acionamentoManual", acionamentoManual);
    } 
  
  }
  
  if(acionamentoManual == 1){
      
      ligaBomba(bomba, tempoMaximo);
      estadoBomba = 1;
      
  }else if(acionamentoManual == 0){
  
      desligaBomba(bomba);
      estadoBomba = 0;
      
  }else{
  
      if(umidadeSolo >= limite){
  
        ligaBomba(bomba, tempoMaximo);
        estadoBomba = 1;
        
      }else{
  
        desligaBomba(bomba);
        estadoBomba = 0;
      }
  }

    Firebase.setInt("estadoBomba", estadoBomba);
}
