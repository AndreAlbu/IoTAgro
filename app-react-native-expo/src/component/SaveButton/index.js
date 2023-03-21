import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Text } from "../../../Thema";

const SaveButton = ({ handleSave }) => {

    return(
        <TouchableOpacity onPress={handleSave} style={styles.btnSave}>
            <Text style={styles.txtSave}>Salvar</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    btnSave: {
        width: '100%',
        backgroundColor: '#07C888',
        alignItems: "center",
        padding: 16,
        borderRadius: 8
    },

    txtSave: {
        fontSize: 16,
        fontWeight: '700'
    }

});

export default SaveButton;