import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        backgroundColor: '#171718'
    },
    
    content: {
        width: '90%',
        marginTop: 32,
    },

    titleAdjuste: {
        fontSize: 32,
        fontWeight: '700'
    },

    textInfo: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: '400',
        color: "#C3C3C3"
    },

    inpuGroup: {
        marginTop: 56
    },

    labelInput: {
        fontSize: 16,
        fontWeight: '400',
        color: "#C4C4C4"
    },

    inputLimit: {
        fontSize: 16,
        marginTop: 8,
        paddingVertical: 16,
        paddingLeft: 16,
        borderWidth: 1.5,
        borderRadius: 8,
        borderColor: '#CED4DA'
    },

    btnFlex: {
        width: '90%',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 32,
    },

    btnSaveLimit: {
        width: '100%',
        backgroundColor: '#008156',
        alignItems: "center",
        padding: 16,
        borderRadius: 8
    },

    txtSave: {
        fontSize: 16,
        fontWeight: '700'
    }
});

export default styles;