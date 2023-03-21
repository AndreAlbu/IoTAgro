import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#171718'
    },
    
    content: {
        width: '90%',
        marginTop:RFValue(24),
    },

    titleAdjuste: {
        fontSize: RFValue(24),
        fontWeight: '700'
    },

    textInfo: {
        width: '90%',
        marginTop: RFValue(8),
        fontSize: RFValue(16),
        fontWeight: '400',
        color: "#C3C3C3"
    },

    inpuSlider: {
        width: '100%',
        borderRadius: RFValue(2),
        marginTop: RFValue(32),
        marginBottom: RFValue(56),
    },

    tooltip: {
        width: RFValue(32),
        height: RFValue(24),
    },

    containerTooltip: {
        width: "100%",
    },

    iconTooltip: {
        fontSize: RFValue(24),
        color: '#373738'
    },

    textTooltip: {
        position: "absolute",
        top: RFValue(2),
        bottom: RFValue(2),
        right: RFValue(7),
        fontSize: RFValue(12),
        fontWeight: '700'
    },

    gradientSlider: {
        marginTop: RFValue(10),
        height: RFValue(8),
        justifyContent:"center",
        alignItems: "center",
        borderRadius: RFValue(2),
        padding: 0
    },
    
    thumbStyle: {
        backgroundColor: '#CACACA',
        borderWidth: RFValue(3),
        borderColor: '#408AA2',
        borderRadius: 12,
        forceDarkAppearance: false
    },

    labelSlider: {
        marginTop: RFValue(8),
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between"  
    },

    textLabelSlider: {
        fontSize: RFValue(10),
        fontWeight: "700",
        color: '#BEBEBE'
    },

    btnFlex: {
        width: '90%',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 32,
    },
});

export default styles;