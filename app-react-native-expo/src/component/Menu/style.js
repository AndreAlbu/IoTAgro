import { StyleSheet } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: RFValue(50),
        padding: RFValue(10),
        

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
       
    },

    btnMenu: {
        position: 'absolute',
        left: RFValue(20),
    },
    
    iconMenu: {
        width: RFValue(24),
        height: RFValue(24),
        color: '#FFF'
    },
    
    iconBack: {
        width: RFValue(24),
        height: RFValue(24),
        color: '#FFF'
    },

    titleMenu: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: RFValue(20),
        color: '#FFF',
    },
});

export default styles;