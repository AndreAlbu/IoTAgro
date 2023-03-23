import React, { useEffect } from "react";
import { ImageBackground, ActivityIndicator } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";

const ScreenNotConnections = () => {

    useEffect(() => {
        showMessage({
            message: "Verifique sua conexão e tente novamente",
            type: "warning",
        });
        return;
    }, []);

    return(
        <ImageBackground
            style={{flex:1, alignItems: "center", justifyContent: "center"}}
            source={require('../../../assets/splashapp2.png')}
            resizeMode="cover"
        >
            <ActivityIndicator size={"small"} color="#FFF"/>
            <FlashMessage position={'center'}/>
        </ImageBackground>
    )
}

export default ScreenNotConnections;