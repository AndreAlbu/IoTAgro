import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { Text } from '../../Thema'
import styles from "./style";

const Menu = ({ navigation }) => {

    return(
        <View style={styles.menu}>
            <TouchableOpacity style={styles.menuBurguer} onPress={() => navigation.openDrawer()}>
                <Image style={styles.imageBurguer} source={require('./../assets/menu-burguer.png')}/>
            </TouchableOpacity>
            <Text style={styles.title}>IOT Agro</Text>
        </View>
    )
}

export default Menu;