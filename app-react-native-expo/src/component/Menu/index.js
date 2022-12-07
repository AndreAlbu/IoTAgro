import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { Text } from '../../../Thema'
import styles from "./style";

const Menu = ({ navigation, back, drawer }) => {

    return(
        <View style={styles.menu}>
            { back &&
                <TouchableOpacity style={styles.menuBurguer} onPress={() => navigation.navigate("Home")}>
                    <Image style={styles.imageBurguer} source={require('./../../assets/backHome.png')}/>
                </TouchableOpacity>
            }
            { drawer &&
                <TouchableOpacity style={styles.menuBurguer} onPress={() => navigation.openDrawer()}>
                    <Image style={styles.imageBurguer} source={require('./../../assets/menu-burguer.png')}/>
                </TouchableOpacity>
            }
            <Text style={styles.titleMenu}>IOT Agro</Text>
        </View>
    )
}

export default Menu;