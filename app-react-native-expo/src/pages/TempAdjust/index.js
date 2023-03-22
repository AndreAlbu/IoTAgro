import React, { useState, useEffect } from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import { ref, update, onValue} from "firebase/database";
import { useFocusEffect } from '@react-navigation/native';

import ScrollPickerComponent from "../../component/ScrollPickerComponent";
import { Text } from "../../../Thema";
import Menu from '../../component/Menu';
import styles from "./style";
import { RFValue } from "react-native-responsive-fontsize";
import SaveButton from "../../component/SaveButton";
import database from "../../config/firebaseconfig";
import FlashMessage, { showMessage } from "react-native-flash-message";

const TempAdjust = ({ navigation }) => {
    
    const hours = ['00', '01', '02', '03', '04'];

    const minutes = ['00', '01', '02', '03',  '04', '05',
    '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '21', '22', '23', '24', '25',
    '26', '27', '28', '29', '30', '31', '32', '33', '34', '35',
    '36', '37', '38', '39', '40', '41', '42', '43', '44', '45',
    '46', '47', '48', '49', '50', '51', '52', '53', '54', '55',
    '56', '57', '58', '59' ];

    const [selectedHours, setSelectedHours] = useState('');
    const [selectedMinutes, setSelectedMinutes] = useState('');

    const [tempLoaded, setTempLoaded] = useState(false);

    const fetchData = () => {
        const startCountRef = ref(database, `/tempoMaximo`);
        onValue(startCountRef, (snapshot) => {
            const data = snapshot.val();
            setSelectedHours(hours[Math.floor(data/3600)]);
            setSelectedMinutes(minutes[Math.floor((data%3600)/60)]);
            setTempLoaded(true);
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

    const handleChangeHours = (value) => {
        setSelectedHours(value);
    };
    
    const handleChangeMinutes = (value) => {
        setSelectedMinutes(value);
    };

    const handleSave = () => {
        try {
            const updates = {};
            updates[`/tempoMaximo`] = parseInt(hours.indexOf(selectedHours)*3600 + minutes.indexOf(selectedMinutes)*60);
            update(ref(database), updates);
            showMessage({
                message: "Limite modificado com sucesso",
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
            <FlashMessage position={'top'}/>
            <Menu
                navigation={navigation}
                title={'AGRO Net'}
                isBack={true}
            />

            <View style={styles.content}>
                <Text style={styles.titleAdjuste}>Definir tempo</Text>
                <Text style={styles.textInfo}>
                    Defina a duração máxima para a operação da bomba.
                </Text>

                <View style={styles.timePicker}>
                    <View style={styles.pickerContainer}>
                        {tempLoaded ? 
                            (<>
                                <ScrollPickerComponent
                                    data={hours}
                                    isHours={true}
                                    index={hours.indexOf(selectedHours)}
                                    handleChange={handleChangeHours}
                                />
                                <Text style={[styles.textTime, {color: "#80FFD5"}]}>:</Text>
                                <ScrollPickerComponent
                                    data={minutes}
                                    isHours={false}
                                    index={minutes.indexOf(selectedMinutes)}
                                    handleChange={handleChangeMinutes}
                                />
                            </>) :

                            <View style={{width: '90%'}}>
                                <ActivityIndicator size={"large"}  color="#80FFD5"/>
                            </View>
                        }
                    </View>
                </View>
            </View>

            <View style={styles.btnFlex}>
                <SaveButton handleSave={handleSave}/>
            </View>
        </View>
    )
}

export default TempAdjust;