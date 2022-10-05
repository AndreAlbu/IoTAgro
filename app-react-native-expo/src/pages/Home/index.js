import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ImageBackground, Image } from "react-native";
import { ref, onValue, update} from "firebase/database";

import { Text } from '../../../Thema';
import database from "../../config/firebaseconfig";
import styles from "./style";
import Menu from "../../component/Menu";
import BombaLigadaDesligada from "../../component/BombaLigadaDesligada";

const Home = ({ navigation }) => {

    const [info, setInfo] = useState({});
    const [isLigada, setIsLigada] = useState(false);
    const [isManual, setIsManual] = useState(false);
    const [colorButton, setColorButton] = useState("#810000");

    useEffect(() => {
        const startCountRef = ref(database, `/`);
        onValue(startCountRef, (snapshot) => {
            const data = snapshot.val();
            setInfo(data);
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



    const hedleButton = () => {

        const updates = {};
        updates[`/acionamentoManual`] = (
            info.acionamentoManual == 1 || info.acionamentoManual == 0
            ? -1
            : 1
        );

        return update(ref(database), updates);
    }

    return(
        <View style={styles.container}>
            <ImageBackground
                source={require('./../../assets/backGroundHome.png')}
                style={styles.imageBackground}
                resizeMode='cover'
            >
                <Menu navigation={navigation}/>
                

                <Image style={styles.imageCircle} source={require('./../../assets/circle.png')}/>
                <View style={styles.content}>
                    <View style={styles.contentInfo}>
                        <View style={styles.info}>
                            <Image source={require('./../../assets/ic_round-air.png')} />
                            <Text style={styles.valueInfo}>{info.umidadeAr}%</Text>
                            <Text style={styles.descriptionInfo}>Umidade do ar</Text>
                        </View>

                        <View style={styles.info}>
                            <Image source={require('./../../assets/carbon_soil-moisture-field.png')} />
                            <Text style={styles.valueInfo}>{info.umidadeSolo}%</Text>
                            <Text style={styles.descriptionInfo}>Umidade do solo</Text>
                        </View>

                        <View style={styles.info}>
                            <Image source={require('./../../assets/carbon_temperature-hot.png')} />
                            <Text style={styles.valueInfo}>{info.temperaturaAr} C°</Text>
                            <Text style={styles.descriptionInfo}>Temperatura</Text>
                        </View>
                    </View>

                    <BombaLigadaDesligada isLigada={isLigada} isManual={isManual}/>
                
                    <TouchableOpacity style={[styles.btnBomba, { backgroundColor: colorButton }]} onPress={hedleButton}>
                            <Text style={styles.textBtn}>
                                {isLigada ? "Desligar" : "Ligar"} bomba
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnDadosCompletos} onPress={hedleButton}>
                            <Text style={styles.textBtn}>Vizualisar dados Completos</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home;