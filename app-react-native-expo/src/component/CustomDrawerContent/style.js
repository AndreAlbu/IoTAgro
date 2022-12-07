import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#151515",
        paddingVertical: 50,
    },

    drawerMenu: {
        height: 130,
        borderBottomWidth: 2,
        borderBottomColor: "#B6B6B4",
        paddingHorizontal: 0,
        marginHorizontal: 30
    },

    titleDrawer: {
        fontWeight: '900',
        fontSize: 34,
        color: "#05BC7F",
        marginBottom: 18
    },

    salutationDrawer: {
        flex: 1,
        flexDirection: "row"
    },

    helloDrawer: {
        fontWeight: '700',
        fontSize: 20
    },

    contentExit: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 30,
        marginBottom: 60
    },

    imageExit: {
        width: 30,
        height: 30,
        marginRight: 16,

    },

    textExit: {
        fontSize: 23,
    }
});

export default styles;