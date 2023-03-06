import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: 50,
        padding: 10,
        

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
       
    },

    btnMenu: {
        position: 'absolute',
        left: 25,
    },
    
    iconMenu: {
        fontSize: 35,
        color: '#FFF'
    },
    
    iconBack: {
        fontSize: 20,
        color: '#FFF'
    },

    titleMenu: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 25,
        color: '#FFF',
    },
});

export default styles;