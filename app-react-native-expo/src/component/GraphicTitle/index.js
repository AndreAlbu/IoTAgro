import React from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Text } from '../../../Thema'
import { RFValue } from "react-native-responsive-fontsize";

const GraphicTitle = ({ title, link }) => {

    return(
        <View style={{
            width: '90%',
            marginTop: RFValue(24),
            marginBottom: RFValue(16),
            marginLeft: RFValue(20),
            alignSelf: 'flex-start',
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Text style={{
                fontWeight: '700',
                fontSize: RFValue(16)
            }}>
                {title}
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL(link)}>
                <Icons name="open-in-new" style={{
                    fontSize: RFValue(16),
                    color: "#FFF"
                }}/>
            </TouchableOpacity>
        </View>
    )
}

export default GraphicTitle;