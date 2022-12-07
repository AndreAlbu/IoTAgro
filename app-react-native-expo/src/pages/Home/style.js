import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#171718'
    },

    imageBackground: {
        width: '100%',
        height: '100%',
        paddingTop: 32,
        flex:1,
    },

    containerImageCircle: {
        marginTop: 32,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    
    content: {
        width: '100%',
        marginTop: 32,
        justifyContent: "center",
        alignItems: "center",
    },

    contentInfo: {
        width: '85%',
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    info: {
        width: '32%',
        height: 120,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        padding: 8,
        gap: 8,
        marginHorizontal: 16,
        backgroundColor: 'rgba(138, 138, 138, 0.1)',
    },

    valueInfo: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 19,
    },

    descriptionInfo: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
    },

    groupBtn: {
        width: '100%',
        marginTop: 32,
        alignItems: "center"
    },

    btnBomba: {
        width:"90%",
        marginBottom: 16,
        paddingVertical: 12,

        borderRadius:8,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
    },

    textBtn:{
        fontSize: 23
    },

    btnDadosCompletos: {
        width:"90%",
        paddingVertical: 12,

        borderRadius:8,
        borderWidth:2,
        borderColor: '#8A8A8A',
        justifyContent:"center",
        alignItems:"center",
    }
});

export default styles;