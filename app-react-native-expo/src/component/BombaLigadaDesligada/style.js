import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    contentText : {
        width: "100%",
        marginTop: RFValue(40)
    },

    enableText: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    circle: {
        width: RFValue(12),
        height: RFValue(12),
        borderRadius: RFValue(6),
        marginRight: 12
    },

    textInfo: {
        fontSize: RFValue(14),
        fontWeight: '700'
    },

    textManual: {
        width: "100%",
        fontSize: RFValue(14),
        fontWeight: '400',
        textAlign: "center",
    },
});

export default styles;