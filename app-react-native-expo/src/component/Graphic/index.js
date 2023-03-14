import React, { useState, useEffect } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { Text } from '../../../Thema'
import styles from './styles';

const Graphic = ({url, field}) => {
  const [dados, setDados] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchDados() {
      const response = await fetch(url);
      const data = await response.json();

      let valores = [];
      if (field === 2) {
        valores = data.feeds.map(feed => parseFloat(feed.field2));
      } else if (field === 3) {
        valores = data.feeds.map(feed => parseFloat(feed.field3));
      } else {
        valores = data.feeds.map(feed => parseFloat(feed.field4));
      }
      let rotulos = data.feeds.map(feed => feed.created_at);
      
      setDados({ valores, rotulos });
      setIsLoaded(true);
    }

    fetchDados();
  }, []);

  const formatXLabel = (prop) => {
    let index = dados.rotulos.indexOf(prop);
    if (index % 10 === 0) {
      let label = new Date(dados.rotulos[index])
      return `${label.getHours()}:${label.getMinutes()}`;
    } else {
      return '';
    }
  }


  return (
    <View style={styles.graphicContainer}>
        {isLoaded ?
          <View style={styles.graphicX}>
            <View style={styles.graphicY}>
              <Text style={styles.textY}>Valores Lidos</Text>
              <LineChart
              
                style={styles.graphic}
                data={{
                    labels: dados.rotulos,
                    datasets: [
                        {
                          data: dados.valores,
                        },
                    ],
                }}
                width={(Dimensions.get('window').width*80)/100} // largura do gráfico
                height={220} // altura do gráfico
                chartConfig={{
                
                  backgroundGradientFrom: '#171718',
                  backgroundGradientFromOpacity: 1,
                  backgroundGradientTo: '#171718',
                  color: (opacity = 1) => `#F00`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  propsForDots: {
                    r: "2.5",
                    strokeWidth: "2",
                    stroke: "#F00",
                    fill: "#F00"
                  },
                  propsForBackgroundLines: {
                    strokeDasharray: null,
                    strokeWidth: 1.5,
                    stroke: '#CCC',
                  },
                }}
                formatXLabel={formatXLabel}
                withVerticalLines={false}
                withShadow={false}
                bezier
              />
            </View>
            <Text style={styles.textX}>Tempo</Text>
          </View>
          :  
          <ActivityIndicator size={'large'} color="#F00" />
        }
    </View>
  );
};

export default Graphic;