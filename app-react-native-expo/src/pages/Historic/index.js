import React, { useEffect } from "react";
import { View, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import Icons from 'react-native-vector-icons/Feather'
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

import { Text } from "../../../Thema";
import Graphic from "../../component/Graphic";
import Menu from "../../component/Menu";
import styles from "./style";
import GraphicTitle from "../../component/GraphicTitle";


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
            {paddingTop: StatusBar.currentHeight + 8}
        ]}>
            <Menu
                navigation={navigation}
                isBack={true}
                title={'Histórico'}
            />
        
            <ScrollView contentContainerStyle={styles.scrollGraphic}>
                
                <GraphicTitle
                    title={"Umidade do Solo"}
                    link={`https://api.thingspeak.com/channels/${channelId}/charts/2`}
                />
                <Graphic
                    url={`https://api.thingspeak.com/channels/${channelId}/fields/${2}.json?api_key=${readApiKey}&results=${numResults}`}
                    field={2}
                />

                <GraphicTitle
                    title={"Umidade do Ar"}
                    link={`https://api.thingspeak.com/channels/${channelId}/charts/3`}
                />
                <Graphic
                    url={`https://api.thingspeak.com/channels/${channelId}/fields/${3}.json?api_key=${readApiKey}&results=${numResults}`}
                    field={3}
                />
                    
                <GraphicTitle
                    title={"Temperatura do Ar"}
                    link={`https://api.thingspeak.com/channels/${channelId}/charts/4`}
                />
                <Graphic
                    url={`https://api.thingspeak.com/channels/${channelId}/fields/${4}.json?api_key=${readApiKey}&results=${numResults}`}
                    field={4}
                />
            </ScrollView>

            <TouchableOpacity
                style={styles.btnDownload}
                onPress={handleDownload}
            >
                <Icons name="download" style={styles.btnIcon}/>
                <Text style={styles.textBtn}>
                    Baixar dados
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Historic;