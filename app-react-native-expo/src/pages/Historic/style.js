import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#171718',
        paddingTop: 8,
        paddingBottom: 8
    },

    scrollGraphic: {
        flexGrow: 1,
        alignItems: "center",
        maxWidth: '100%'
    },

    fistertitleGraphic: {
        width: '100%',
        marginTop: 16,
        marginBottom: 16,
        textAlign: "left",
        marginLeft: 24,
        fontSize: 24
    },

    titleGraphic: {
        width: '100%',
        marginTop: 40,
        marginBottom: 16,
        textAlign: "left",
        marginLeft: 24,
        fontSize: 24
    },

    btnDownload: {
        width:"90%",
        marginTop: 16,
        marginBottom: 16,
        paddingVertical: 12,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#008156',
        borderRadius:8,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
    },

    btnIcon: {
        color: "#FFF",
        fontSize: 32,
        paddingRight: 24,
        paddingBottom: 8
    },

    textBtn:{
        fontSize: 24,
        fontWeight: '600',
    },
});

export default styles;