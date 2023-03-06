import React, { useState } from "react";
import { View, TouchableOpacity, Alert,
    TextInput, Platform } from "react-native";
import { ref, update} from "firebase/database";

import database from "../../config/firebaseconfig";
import { Text } from "../../../Thema";
import Menu from '../../component/Menu';
import styles from "./style";

const LimitAdjust = ({ navigation }) => {

    const [limit, setLimit] = useState(0);

    const adjustLimit = () => {
        // console.log(limit);
        const updates = {};
        updates[`/limite`] = parseInt(limit);
        update(ref(database), updates);
        Alert.alert("Moficado com sucesso")
        setLimit(0)
        return;
    }

    return(
        <View style={[
            styles.container,
            {paddingTop: Platform.OS === "ios" ? 40 : 0}
        ]}>
            <Menu
                navigation={navigation}
                title={'IOT Agro'}
                isBack={true}
            />

            <View style={styles.content}>
                <Text style={styles.titleAdjuste}>Ajustar limite</Text>
                <Text style={styles.textInfo}>
                    Informe qual é o valor limite máximo de umidade que o solo pode chegar
                </Text>

                <View style={styles.inpuGroup}>
                    <Text style={styles.labelInput}>Limite de umidade do solo</Text>
                    <TextInput
                        value={limit}
                        onChangeText={setLimit}
                        placeholderTextColor={'#C4C4C4'}
                        style={styles.inputLimit}
                        placeholder="Digite aqui o valor"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={styles.btnFlex}>
                <TouchableOpacity onPress={adjustLimit} style={styles.btnSaveLimit}>
                    <Text style={styles.txtSave}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LimitAdjust;