import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Text } from '../../../Thema'
import styles from "./style";

const Menu = ({ navigation, isBack, title }) => {

    return(
        <View style={styles.menu}>
            { isBack ?
                <TouchableOpacity style={styles.btnMenu} onPress={ () => navigation.navigate('Inicio')}>
                    <Icon name="arrow-back-ios" style={styles.iconBack}/>
                </TouchableOpacity>
            :
                <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" style={styles.iconMenu}/>
                </TouchableOpacity>
            }
            <Text style={styles.titleMenu}>{title}</Text>
        </View>
    )
}

export default Menu;