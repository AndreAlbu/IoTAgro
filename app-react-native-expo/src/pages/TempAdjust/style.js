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
        marginTop: RFValue(24),
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
        color: "#C3C3C3",
    },

    timePicker: {
        marginTop: RFValue(64),
        width: '100%',
        alignItems: "center"
    },

    pickerContainer: {
        width: '89.4%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    btnFlex: {
        width: '90%',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: RFValue(32),
    },
});

export default styles;