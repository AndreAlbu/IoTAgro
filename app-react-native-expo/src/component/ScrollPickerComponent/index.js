import React from "react";
import { View, StyleSheet } from "react-native";
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { RFValue } from "react-native-responsive-fontsize";

import { Text } from "../../../Thema";

const renderItem = (data, index, select, isHours) => {

    const textColor = select ? "#07C888" : "rgba(226, 226, 237, 0.16);";
    
    return (
      <View key={index}>
        <Text style={[styles.textTime, {color: textColor}]}>{data} {isHours ? 'h' : 'm'}</Text>
      </View>
    );
};

const ScrollPickerComponent = ({ data, index, isHours, handleChange }) => {

    return(
        <View style={styles.cardScrollsSelects}>
            <ScrollPicker
                dataSource={data}
                selectedIndex={index}
                renderItem={(d, i, s) => renderItem(d, i, s, isHours)}
                onValueChange={handleChange}
                wrapperHeight={RFValue(150)}
                wrapperColor='#171718'
                itemHeight={RFValue(48)}
                highlightColor='#454545'
                highlightBorderWidth={2}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    cardScrollsSelects: {
        width: '45%',
        height: RFValue(150),
        paddingHorizontal: RFValue(16)
    },
    
    textTime: {
        // color: '#80FFD5',
        fontWeight: '700',
        fontSize: RFValue(32)
    },
});


export default ScrollPickerComponent;