import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contentText : {
        width: "100%",
        marginTop: 16
    },

    enableText: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    circle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        marginRight: 16
    },

    textInfo: {
        fontSize: 22,
        fontWeight: '700'
    },

    textManual: {
        width: "100%",
        marginTop: 20,
        fontSize: 20,
        fontWeight: '400',
        textAlign: "center",
    },
});

export default styles;