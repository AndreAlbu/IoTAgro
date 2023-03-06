import React from "react";
import { View, TouchableOpacity, BackHandler, Platform } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

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
                    <Text style={styles.titleDrawer}>AgroNet</Text>
                    <View style={styles.salutationDrawer}>
                        <Text style={styles.helloDrawer}>
                            Olá
                        </Text>
                        <Text style={{fontSize: 20}}>, Seja bem vindo produtor</Text>
                    </View>
                    
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            {
                Platform.OS === "ios" ?
                null :
                <TouchableOpacity style={styles.contentExit} onPress={handleBackButton}>
                    <Icon style={styles.imageExit} name='ios-exit-outline'/>
                    <Text style={styles.textExit}>
                        Sair
                    </Text>
                </TouchableOpacity>
            }
        </View>
    );
}

export default CustomDrawerContent;