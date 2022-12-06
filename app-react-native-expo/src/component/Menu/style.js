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

    titleMenu: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 25,
        color: '#FFF',
    },
});

export default styles;