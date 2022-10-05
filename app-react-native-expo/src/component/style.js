import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: 50,
        padding: 10,
        
        position: "absolute",
        top: '3.5%',
        left: 0,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
       
    },

    menuBurguer: {
        position: 'absolute',
        left: 10,
    },

    imageBurguer: {
        width: 35,
        height: 35
    },

    title: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 25,
        color: '#FFF',
    },

    contentText : {
        width: "100%",

        bottom: "50%",
        position: "absolute",
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
    }
});

export default styles;