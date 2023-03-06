import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ImageBackground,
    Image, ActivityIndicator, Platform, StatusBar } from "react-native";
import { ref, onValue } from "firebase/database";
import { Text } from '../../../Thema';

import database from "../../config/firebaseconfig";
import styles from "./style";
import Menu from "../../component/Menu";
import BombaLigadaDesligada from "../../component/BombaLigadaDesligada";
import BottomHalfModal from "../../component/BottomHalfModal";

const Home = ({ navigation }) => {

    const [info, setInfo] = useState({});
    const [infoLoaded, setInfoLoaded] = useState(false)
    const [isLigada, setIsLigada] = useState(false);
    const [isManual, setIsManual] = useState(false);
    const [colorButton, setColorButton] = useState("#008156");
    const [optionsBomba, setOptionsBomba] = useState(false);


    useEffect(() => {
        const startCountRef = ref(database, `/`);
        onValue(startCountRef, (snapshot) => {
            const data = snapshot.val();
            setInfo(data);
            setInfoLoaded(true)
        })
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
                setColorButton("#810000");
            } else {
                setIsLigada(false);
                setColorButton("#008156");
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
        <View style={[
            styles.container,
            {paddingTop: Platform.OS === "ios" ? 40 : 0}
        ]}>
            <ImageBackground
                source={require('./../../assets/backGroundHome.png')}
                style={styles.imageBackground}
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
                        <View style={styles.info}>
                            <Image source={require('./../../assets/ic_round-air.png')} />
                            <Text style={styles.valueInfo}>
                                {infoLoaded ? info.umidadeAr : <ActivityIndicator size={"small"} color="#FFF"/>}%
                            </Text>
                            <Text style={styles.descriptionInfo}>Umidade do ar</Text>
                        </View>

                        <View style={styles.info}>
                            <Image source={require('./../../assets/carbon_soil-moisture-field.png')} />
                            <Text style={styles.valueInfo}>
                                {infoLoaded ? info.umidadeSolo : <ActivityIndicator size={"small"} color="#FFF"/>}%
                            </Text>
                            <Text style={styles.descriptionInfo}>Umidade do solo</Text>
                        </View>

                        <View style={styles.info}>
                            <Image source={require('./../../assets/carbon_temperature-hot.png')} />
                            <Text style={styles.valueInfo}>
                                {infoLoaded ? info.temperaturaAr : <ActivityIndicator size={"small"} color="#FFF"/>} C°
                            </Text>
                            <Text style={styles.descriptionInfo}>Temperatura</Text>
                        </View>
                    </View>

                    {infoLoaded ?
                        <BombaLigadaDesligada isLigada={isLigada} isManual={isManual}/> :
                        <ActivityIndicator size={"large"} style={{marginTop: 16}} color='#FFF'/>
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