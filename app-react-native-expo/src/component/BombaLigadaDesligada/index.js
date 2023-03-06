import React from "react";
import { View } from "react-native";

import { Text } from '../../../Thema'
import styles from "./style";

const BombaLigadaDesligada = ({ isLigada, isManual}) => {


    return(
        <View style={styles.contentText}>
            <View style={styles.enableText}>
                { isLigada
                    ? <View style={[styles.circle, {backgroundColor: "#008156"}]} />
                    : <View style={[styles.circle, {backgroundColor: "#EF0000"}]} />
                }
                <Text style={styles.textInfo}>
                    Bomba  {isLigada ? "ligada" : "desligada"}
                </Text>
            </View>

            <Text style={styles.textManual}>
                Sistema em modo {isManual ? "manual" : "automático"}
            </Text>
        </View>
    )
}

export default BombaLigadaDesligada;