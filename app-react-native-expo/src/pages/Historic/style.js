import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#171718',
        
        paddingBottom: 8
    },

    scrollGraphic: {
        flexGrow: 1,
        alignItems: "center",
        maxWidth: '100%'
    },

    fistertitleGraphic: {
        width: '100%',
        marginTop: RFValue(36),
        marginBottom: RFValue(16),
        textAlign: "left",
        marginLeft: RFValue(20),
        fontWeight: '700',
        fontSize: RFValue(16)
    },

    titleGraphic: {
        width: '100%',
        marginTop: RFValue(32),
        marginBottom: RFValue(16),
        textAlign: "left",
        marginLeft: RFValue(20),
        fontWeight: '700',
        fontSize: RFValue(16)
    },

    btnDownload: {
        width:"89.4%",
        marginTop: RFValue(45),
        marginBottom: RFValue(24),
        paddingVertical: RFValue(16),

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#07C888',
        borderRadius:4,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
    },

    btnIcon: {
        color: "#030C09",
        fontSize: RFValue(24),
        paddingRight: RFValue(16),
    },

    textBtn:{
        fontSize: RFValue(16),
        fontWeight: '600',
        color: '#030C09'
    },
});

export default styles;