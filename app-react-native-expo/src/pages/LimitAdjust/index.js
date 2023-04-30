import React, { useEffect, useState } from "react";
import { View, StatusBar, Alert } from "react-native";
import { ref, update, onValue} from "firebase/database";
import Slider from 'react-native-simple-slider';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFocusEffect } from '@react-navigation/native';

import database from "../../config/firebaseconfig";
import { Text } from "../../../Thema";
import Menu from '../../component/Menu';
import styles from "./style";
import SaveButton from "../../component/SaveButton";
import { RFValue } from "react-native-responsive-fontsize";
import { showMessage } from "react-native-flash-message";

const LimitAdjust = ({ navigation }) => {

    const [sliderValue, setSliderValue] = useState(0);
    const [linearWidith, setLinearWidith] = useState(0);
    
    const fetchData = () => {
        const startCountRef = ref(database, `/limite`);
        onValue(startCountRef, (snapshot) => {
            const data = snapshot.val();
            setSliderValue(Math.round((1024-data)/10.24));
        })
    }
    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [])
    );

    useEffect(() => {
        fetchData();
    }, []);

    const onValueChange = (value) => {
        setSliderValue(value);
    };

    const handleLinearLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setLinearWidith(width);
    };

    const adjustLimit = () => {
        try{
            const updates = {};
            updates[`/limite`] = parseInt(Math.round(1024-(sliderValue*10.24)));
            update(ref(database), updates);
            update(ref(database), updates);
            showMessage({
                message: "Limite de úmidade atualizado",
                type: "success",
                duration: 2000,
                statusBarHeight: StatusBar.currentHeight + 8,
                hideOnPress: true,
                autoHide: true,
            });
            return;
        } catch (error) {
            showMessage({
                message: "Ocorreu um erro tente mais tarde",
                type: "warning",
                duration: 2000,
                statusBarHeight: StatusBar.currentHeight + 8,
                hideOnPress: true,
                autoHide: true,
            });
            return;
        }
    }

    return(
        <View style={[
            styles.container,
            {paddingTop: StatusBar.currentHeight + 8}
        ]}>
            <Menu
                navigation={navigation}
                title={'AGRO Net'}
                isBack={true}
            />

            <View style={styles.content}>
                <Text style={styles.titleAdjuste}>Definir limite</Text>
                <Text style={styles.textInfo}>
                Defina qual o limite máximo de umidade para o solo
                </Text>

                <View style={styles.inpuSlider}>
                    <View style={styles.containerTooltip}>
                        <View style={[styles.tooltip, {
                            left: `${sliderValue-4}%`
                        }]}>
                            <Icon name="tooltip" style={styles.iconTooltip}/>
                            <Text style={[
                                styles.textTooltip,
                                {left: sliderValue<10 ? RFValue(9) : (
                                    sliderValue>=100 ? RFValue(2) : RFValue(5))}
                            ]}>
                                {sliderValue}
                            </Text>
                        </View>
                    </View>
                    <LinearGradient
                        onLayout={handleLinearLayout}
                        colors={["#663B15", "#A77A57", "#6572B1", "#162D9D", '#373738']}
                        locations={[
                            sliderValue/100<=0.1472?sliderValue/100:0.1472,
                            sliderValue/100<=0.443?sliderValue/100:0.443,
                            sliderValue/100<=0.7696?sliderValue/100:0.7696,
                            sliderValue/100<=0.9277 ? sliderValue/100 : 0.9277,
                            sliderValue/100]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradientSlider}
                    >
                        <Slider
                            style={{ flex: 1}}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            value={sliderValue}
                            sliderWidth={linearWidith}
                            onValueChange={onValueChange}
                            maximumTrackTintColor='transparent'
                            minimumTrackTintColor='transparent'
                            thumbButton={
                                <View
                                    style={styles.thumbStyle}
                                />
                            }
                        />
                    </LinearGradient>
                    <View style={styles.labelSlider}>
                        <Text style={styles.textLabelSlider}>muito seco</Text>
                        <Text style={styles.textLabelSlider}>seco</Text>
                        <Text style={styles.textLabelSlider}>úmido</Text>
                        <Text style={styles.textLabelSlider}>muito úmido</Text>
                    </View>
                </View>
                    {/* <Text style={styles.labelInput}>Limite de umidade do solo</Text> */}
            </View>

            <View style={styles.btnFlex}>
                <SaveButton handleSave={adjustLimit}/>
            </View>
        </View>
    )
}

export default LimitAdjust;