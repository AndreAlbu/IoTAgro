import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ImageBackground,
    Image, ActivityIndicator, StatusBar, Platform } from "react-native";
import { ref, onValue, push, get } from "firebase/database";
import { LinearGradient } from "expo-linear-gradient";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

import { Text } from '../../../Thema';
import database from "../../config/firebaseconfig";
import styles from "./style";
import Menu from "../../component/Menu";
import BombaLigadaDesligada from "../../component/BombaLigadaDesligada";
import BottomHalfModal from "../../component/BottomHalfModal";
  
async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
}

const Home = ({ navigation }) => {

    const [info, setInfo] = useState({});
    const [infoLoaded, setInfoLoaded] = useState(false)
    const [isLigada, setIsLigada] = useState(false);
    const [isManual, setIsManual] = useState(false);
    const [colorButton, setColorButton] = useState("#008156");
    const [optionsBomba, setOptionsBomba] = useState(false);

    useEffect(() => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
              shouldPlaySound: true,
              shouldSetBadge: false,
              shouldShowAlert: true,
            }),
        });

        registerForPushNotificationsAsync()
        .then(async (token) => {
            try {
                const tokensRef = ref(database, 'tokens');
                const snapshot = await get(tokensRef);
                
                if (!snapshot.exists() || !Object.values(snapshot.val()).includes(token)) {
                    push(tokensRef, token);
                    return;
                }
            } catch (error) {
                alert("Erro no token de notificação: "+error)
            }
        })
        .catch(error => alert('erro no token '+error));
    }, []);

    useEffect(() => {
        const startCountRef = ref(database, `/`);
        onValue(startCountRef, (snapshot) => {
            const data = snapshot.val();
            setInfo(data);
            setInfoLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (info) {
            if (info.acionamentoManual == 0 || info.acionamentoManual == 1) {
                setIsManual(true);
            } else {
                setIsManual(false);
            }

            if (info.estadoBomba == 1) {
                setIsLigada(true);
                setColorButton("#D00000");
            } else {
                setIsLigada(false);
                setColorButton("#07C888");
            }
        }
    }, [info])

    const close = () => {
        setOptionsBomba(false)
    }

    const hedleButton = () => {
        setOptionsBomba(true);
    }

    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent"/>

            <ImageBackground
                source={require('./../../assets/backgrounHome.png')}
                style={[styles.imageBackground, {paddingTop: StatusBar.currentHeight + 8}]}
                resizeMode='cover'
            >
                <Menu navigation={navigation} drawer={true}/>
                
                <View style={styles.containerImageCircle}>
                    <Image
                        source={require('./../../assets/circle.png')}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.contentInfo}>
                        <LinearGradient
                            style={styles.info}
                            colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
                            start={{ x: 0, y: 0}}
                            end={{ x: 0, y: 1}}
                        >
                            <Image
                                style={styles.iconInfo}
                                source={require('./../../assets/ic_round-air.png')} />
                            <Text style={styles.valueInfo}>
                                {infoLoaded ? info.umidadeAr : <ActivityIndicator size={"small"} color="#FFF"/>}%
                            </Text>
                            <Text style={styles.descriptionInfo}>Umidade do ar</Text>
                        </LinearGradient>

                        <LinearGradient
                            style={styles.info}
                            colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
                            start={{ x: 0, y: 0}}
                            end={{ x: 0, y: 1}}
                        >
                            <Image
                                style={styles.iconInfo}
                                source={require('./../../assets/carbon_soil-moisture-field.png')} />
                            <Text style={styles.valueInfo}>
                                {infoLoaded ? info.umidadeSolo : <ActivityIndicator size={"small"} color="#FFF"/>}%
                            </Text>
                            <Text style={styles.descriptionInfo}>Umidade do solo</Text>
                        </LinearGradient>

                        <LinearGradient
                            style={styles.info}
                            colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
                            start={{ x: 0, y: 0}}
                            end={{ x: 0, y: 1}}
                        >
                            <Image
                                style={styles.iconInfo}
                                source={require('./../../assets/carbon_temperature-hot.png')} />
                            <Text style={styles.valueInfo}>
                                {infoLoaded ? info.temperaturaAr : <ActivityIndicator size={"small"} color="#FFF"/>} C°
                            </Text>
                            <Text style={styles.descriptionInfo}>Temperatura</Text>
                        </LinearGradient>
                    </View>

                    {infoLoaded ?
                        <BombaLigadaDesligada isLigada={isLigada} isManual={isManual}/> :
                        <ActivityIndicator size={"large"} style={styles.activityIndicator} color='#FFF'/>
                    }            
                    <View style={styles.groupBtn}>
                        <TouchableOpacity
                            style={[styles.btnBomba, { backgroundColor: colorButton }]}
                            onPress={hedleButton}
                        >
                            <Text style={styles.textBtn}>
                                {infoLoaded ? 
                                    (isLigada ? "Desligar bomba" : "Ligar bomba") :
                                    <ActivityIndicator size={"small"} color="#FFF"/>
                                }
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnDadosCompletos}
                            onPress={() => navigation.navigate('Historico')}
                        >
                            <Text
                                style={styles.textBtn}
                            >Visualizar dados Completos</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <BottomHalfModal visible={optionsBomba} close={close} isOn={isLigada}/>
            </ImageBackground>
        </View>
    )
}

export default Home;