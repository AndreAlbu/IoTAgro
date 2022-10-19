import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: 50,
        padding: 10,
        
        position: "absolute",
        top: '3.5%',
        left: 0,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
       
    },

    menuBurguer: {
        position: 'absolute',
        left: 10,
    },

    imageBurguer: {
        width: 35,
        height: 35
    },

    title: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 25,
        color: '#FFF',
    },

    contentText : {
        width: "100%",

        bottom: "50%",
        position: "absolute",
    },

    enableText: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    circle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        marginRight: 16
    },

    textInfo: {
        fontSize: 22,
        fontWeight: '700'
    },

    textManual: {
        width: "100%",
        marginTop: 20,
        fontSize: 20,
        fontWeight: '400',
        textAlign: "center",
    },

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

    helloDrawer: {
        flex: 1,
        flexDirection: "row"
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
        fontSize: 23
    }
});

export default styles;