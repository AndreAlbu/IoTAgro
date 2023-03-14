import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#161616",
        marginTop: RFValue(24),
        paddingHorizontal: RFPercentage(0.12),
    },

    drawerMenu: {
        marginHorizontal: RFValue(24),
        paddingBottom: RFValue(40),
        borderBottomWidth: 2,
        borderBottomColor: "#B6B6B4",
        marginBottom: RFValue(48)
    },

    titleDrawer: {
        fontWeight: '700',
        fontSize: RFValue(24),
        color: "#05BC7F",
        marginBottom: RFValue(17)
    },

    salutationDrawer: {
        flex: 1,
        flexDirection: "row"
    },

    helloDrawer: {
        fontWeight: '700',
        fontSize: RFValue(16)
    },

    textHellow: {
        fontWeight: '400',
        fontSize: RFValue(16)
    },

    contentExit: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 30,
        marginBottom: 60
    },

    imageExit: {
        width: RFValue(24),
        height: RFValue(24),
        marginRight: RFValue(20),
        color: '#FFF'
    },

    textExit: {
        fontSize: RFValue(16),
    }
});

export default styles;