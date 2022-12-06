import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },

    imageBackground: {
        width: '100%',
        height: '100%',
        
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },

    
    imageCircle: {
        position: 'absolute',
        left: 42,
        top: 100,
    },
    
    content: {
        width: '100%',
        height: '50%',

        flex:1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 24, 
        position: "absolute",
        bottom: 0,
    },

    contentInfo: {
        width: '85%',
        height: '20%',
        flex: 1,
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

    btnBomba: {
        width:"90%",
        height: 50,
        marginBottom: 16,

        borderRadius:4,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
    },

    textBtn:{
        fontSize: 23
    },

    btnDadosCompletos: {
        width:"90%",
        height: 50,

        borderRadius:8,
        borderWidth:2,
        borderColor: '#8A8A8A',
        justifyContent:"center",
        alignItems:"center",
    }
});

export default styles;