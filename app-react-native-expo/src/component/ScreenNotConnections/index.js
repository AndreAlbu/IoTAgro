import React, { useEffect } from "react";
import { ImageBackground, StatusBar } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";

const ScreenNotConnections = () => {

    useEffect(() => {
        showMessage({
            message: "Verifique sua conexão e tente novamente",
            type: "warning",
            duration: 2000,
            statusBarHeight: StatusBar.currentHeight + 8,
            hideOnPress: true,
            autoHide: true,
        });
        return;
    }, []);

    return(
        <ImageBackground
            style={{flex:1}}
            source={require('../../../assets/splashapp2.png')}
            resizeMode="cover"
        >
            <FlashMessage position={'top'}/>
        </ImageBackground>
    )
}

export default ScreenNotConnections;