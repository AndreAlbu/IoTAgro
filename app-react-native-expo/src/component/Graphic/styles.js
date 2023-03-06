import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    graphicContainer: {
        minWidth: '95%',
        width: '95%',
        height: 270,
        borderWidth: 2,
        borderColor: '#343434',
        borderRadius: 8,

        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    graphicX: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    graphicY: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",

    },

    textY: {
        transform: [{ rotate: '270deg' }],
        fontSize: 16,
        color: '#6185a6'
        
    },
    
    graphic: {
        marginLeft: -40,
        paddingLeft: 8,
        paddingRight: 56,
        paddingTop: 16
    },
    
    textX: {
        fontSize: 16,
        color: '#6185a6',
        marginBottom: 8,
        marginLeft: 48
    },
});

export default styles;