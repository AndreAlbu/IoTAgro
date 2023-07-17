import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { Text } from '../../../Thema'
import styles from "./style";

const Menu = ({ navigation, isBack, title }) => {

    return(
        <View style={styles.menu}>
            { isBack ?
                <TouchableOpacity style={styles.btnMenu} onPress={ () => navigation.navigate('Inicio')}>
                    <Image
                        source={require('./../../assets/back.png')}
                        style={styles.iconBack}
                    />
                </TouchableOpacity>
            :
                <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.openDrawer()}>
                    <Image
                        source={require('./../../assets/menu-burger.png')}
                        style={styles.iconMenu}
                    />
                </TouchableOpacity>
            }
            {title?
                <Text style={styles.titleMenu}>{title}</Text> :
                <Text style={styles.titleMenu}>AGRONET</Text>
            }
        </View>
    )
}

export default Menu;