import React, { useState, useEffect } from "react";
import { View, StatusBar, ActivityIndicator, Alert } from "react-native";
import { ref, update, onValue} from "firebase/database";
import ScrollPicker from 'react-native-wheel-scrollview-picker';

import { Text } from "../../../Thema";
import Menu from '../../component/Menu';
import styles from "./style";
import { RFValue } from "react-native-responsive-fontsize";
import SaveButton from "../../component/SaveButton";
import database from "../../config/firebaseconfig";

const renderItem = (data, index, selectedIndex, isHours) => {

    const isActive = data === selectedIndex;
    const textColor = isActive ? "#07C888" : "rgba(226, 226, 237, 0.16);";
    
    return (
      <View key={index}>
        <Text style={[styles.textTime, {color: textColor}]}>{data} {isHours ? 'h' : 'm'}</Text>
      </View>
    );
};

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
    const [selectedPositionHours, setSelectedPositionHours] = useState();
    const [selectedPositiomMinutes, setSelectedPositiomMinutes] = useState();

    const [tempLoaded, setTempLoaded] = useState(false);


    useEffect(() => {
        const startCountRef = ref(database, `/tempoMaximo`);
        onValue(startCountRef, (snapshot) => {
            const data = snapshot.val();
            setSelectedHours(hours[Math.floor(data/3600)]);
            setSelectedMinutes(minutes[Math.floor((data%3600)/60)]);
            setSelectedPositionHours(Math.floor(data/3600));
            setSelectedPositiomMinutes(Math.floor((data%3600)/60));
            setTempLoaded(true);
        })
    }, []);

    const handleChangeHours = (value) => {
        setSelectedHours(value);
    };
    
    const handleChangeMinutes = (value) => {
        setSelectedMinutes(value);
    };

    const handleSave = () => {
        const updates = {};
        updates[`/tempoMaximo`] = parseInt(hours.indexOf(selectedHours)*3600 + minutes.indexOf(selectedMinutes)*60);
        update(ref(database), updates);
        Alert.alert("Moficado com sucesso")
        return;
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
                <Text style={styles.titleAdjuste}>Definir tempo</Text>
                <Text style={styles.textInfo}>
                    Defina a duração máxima para a operação da bomba.
                </Text>

                <View style={styles.timePicker}>
                    <View style={styles.pickerContainer}>
                        {tempLoaded ? 
                            (<>
                                <View style={styles.cardScrollsSelects}>
                                    <ScrollPicker
                                        dataSource={hours}
                                        selectedIndex={selectedPositionHours}
                                        renderItem={(d, i) => renderItem(d, i, selectedHours, true)}
                                        onValueChange={handleChangeHours}
                                        wrapperHeight={RFValue(150)}
                                        wrapperColor='#171718'
                                        itemHeight={RFValue(48)}
                                        highlightColor='#454545'
                                        highlightBorderWidth={2}
                                    />
                                </View>
                                <Text style={[styles.textTime, {color: "#80FFD5"}]}>:</Text>
                                <View style={styles.cardScrollsSelects}>
                                    <ScrollPicker
                                        dataSource={minutes}
                                        selectedIndex={selectedPositiomMinutes}
                                        renderItem={(d, i) => renderItem(d, i, selectedMinutes)}
                                        onValueChange={handleChangeMinutes}
                                        wrapperHeight={RFValue(150)}
                                        itemHeight={RFValue(48)}
                                        wrapperColor='#171718'
                                        highlightColor='#454545'
                                        highlightBorderWidth={2}
                                    />
                                </View>
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