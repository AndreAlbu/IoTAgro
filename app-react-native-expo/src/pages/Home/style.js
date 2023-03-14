import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#171718',
    },
    
    imageBackground: {
        width: '100%',
        height: '100%',
        flex:1,
    },

    containerImageCircle: {
        marginTop: RFValue(24),
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    
    content: {
        width: '100%',
        marginTop: RFValue(31),
        justifyContent: "center",
        alignItems: "center",
    },

    contentInfo: {
        width: '90.4%',
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    info: {
        width: '30.4%',
        height: RFValue(103),

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        padding: 8,
        gap: 8,
        marginHorizontal: RFValue(16),
    },

    iconInfo: {
        width: RFValue(32),
        height: RFValue(32),
        marginBottom: RFValue(8)
    },

    valueInfo: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: RFValue(24),
    },

    descriptionInfo: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: RFValue(11.5),
    },

    activityIndicator: {
        marginTop: RFValue(40)
    },

    groupBtn: {
        width: '100%',
        marginTop: RFValue(24),
        alignItems: "center"
    },

    btnBomba: {
        width:"89.4%",
        marginBottom: RFValue(16),
        paddingVertical: RFValue(16),
        paddingHorizontal: RFValue(24),

        borderRadius:8,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
    },

    textBtn:{
        fontWeight: '700',
        fontSize: RFValue(16)
    },

    btnDadosCompletos: {
        width:"89.4%",
        paddingVertical: RFValue(16),
        paddingHorizontal: RFValue(24),
        justifyContent:"center",
        alignItems:"center",

        borderWidth:2,
        borderRadius:8,
        borderColor: "#8A8A8A"
    }
});

export default styles;