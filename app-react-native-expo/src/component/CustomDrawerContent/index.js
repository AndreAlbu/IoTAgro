import React from "react";
import { View, TouchableOpacity, BackHandler, Platform, Image } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList } from '@react-navigation/drawer';

import { Text } from "../../../Thema";
import styles from "./style";

const CustomDrawerContent = (props) => {

    const handleBackButton = () => {
        BackHandler.exitApp();
        return true;
    }

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerMenu}>
                    <Text style={styles.titleDrawer}>Agro Net</Text>
                    <View style={styles.salutationDrawer}>
                        <Text style={styles.helloDrawer}>
                            Olá
                        </Text>
                        <Text style={styles.textHellow}>, Seja bem vindo produtor</Text>
                    </View>
                    
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            {
                Platform.OS === "ios" ?
                null :
                <TouchableOpacity style={styles.contentExit} onPress={handleBackButton}>
                    <Image
                        source={require('./../../assets/exit-log-out.png')}
                        style={styles.imageExit} 
                    />
                    <Text style={styles.textExit}>
                        Sair
                    </Text>
                </TouchableOpacity>
            }
        </View>
    );
}

export default CustomDrawerContent;