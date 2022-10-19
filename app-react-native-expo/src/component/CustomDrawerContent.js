import React from "react";
import { View, Image } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer';
import { Text } from "../../Thema";
import styles from "./style";

const CustomDrawerContent = (props) => {
    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerMenu}>
                    <Text style={styles.titleDrawer}>IOT Agro</Text>
                    <View style={styles.helloDrawer}>
                        <Text style={{fontWeight: '700', fontSize: 20}}>
                            Olá
                        </Text>
                        <Text style={{fontSize: 20}}>, Usuário</Text>
                    </View>
                    
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.contentExit}>
                <Image style={styles.imageExit} source={require('./../assets/exit.png')}/>
                <Text style={styles.textExit}>
                    Sair
                </Text>
            </View>
        </View>
    );
}

export default CustomDrawerContent;