void ligaBomba(int porta){

  digitalWrite(porta, HIGH);
  Serial.println("Ligando bomba");
}

void desligaBomba(int porta){

  digitalWrite(porta, LOW);
  Serial.println("Desligando bomba");
}

void acionamento(int acionamentoManual, int limite, int umidadeSolo){

  if(acionamentoManual == 1){
      
      ligaBomba(bomba);
      estadoBomba = 1;
      
    }else if(acionamentoManual == 0){

      desligaBomba(bomba);
      estadoBomba = 0;
      
    }else{

      if(umidadeSolo >= limite){

        ligaBomba(bomba);
        estadoBomba = 1;
        
      }else{

        desligaBomba(bomba);
        estadoBomba = 0;
      }
    }

    Firebase.setInt("estadoBomba", estadoBomba);
}
