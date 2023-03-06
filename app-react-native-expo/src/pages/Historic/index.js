import React, { useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Feather'
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

import { Text } from "../../../Thema";
import Graphic from "../../component/Graphic";
import Menu from "../../component/Menu";
import styles from "./style";


const Historic = ({ navigation }) => {
    
    const readApiKey = '8VGNC3SJM3RJVTYD';
    const channelId = '1854739';
    const numResults = '42';

    const handleDownload = async () => {
        
        const fileUri = FileSystem.documentDirectory + 'data.csv';
        try {
            const downloadResumable = FileSystem.createDownloadResumable(
                'https://thingspeak.com/channels/1854739/feeds.csv',
                fileUri
            );

            const { uri } = await downloadResumable.downloadAsync();

            await Sharing.shareAsync(uri);
            console.log('Arquivo CSV baixado com sucesso.');
        } catch (error) {
            console.error(error);
            alert('Houve um erro ao tentar baixar o arquivo CSV.');
        }
    }

    return(
        <View style={[
            styles.container,
            {paddingTop: Platform.OS === "ios" ? 40 : 0}
        ]}>
            <Menu
                navigation={navigation}
                isBack={true}
                title={'Histórico'}
            />
        
            <ScrollView contentContainerStyle={styles.scrollGraphic}>
                <Text style={styles.fistertitleGraphic}>Umidade do Solo</Text>
                <Graphic
                    url={`https://api.thingspeak.com/channels/${channelId}/fields/${2}.json?api_key=${readApiKey}&results=${numResults}`}
                    field={2}
                    />

                <Text style={styles.titleGraphic}>Umidade do Ar</Text>
                <Graphic
                    url={`https://api.thingspeak.com/channels/${channelId}/fields/${3}.json?api_key=${readApiKey}&results=${numResults}`}
                    field={3}
                    />
                    
                <Text style={styles.titleGraphic}>Temperatura do Ar</Text>
                <Graphic
                    url={`https://api.thingspeak.com/channels/${channelId}/fields/${4}.json?api_key=${readApiKey}&results=${numResults}`}
                    field={4}
                />
            </ScrollView>

            <TouchableOpacity
                style={styles.btnDownload}
                onPress={handleDownload}
            >
                <Icon name="download" style={styles.btnIcon}/>
                <Text style={styles.textBtn}>
                    Baixar dados
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Historic;