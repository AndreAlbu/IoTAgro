import React, { useEffect, useState } from "react";
import {decode, encode} from 'base-64';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import NetInfo from '@react-native-community/netinfo';
import * as Notifications from 'expo-notifications';
import { doc, setDoc } from "firebase/firestore";

import { firestore } from "./src/config/firebaseconfig";
import CustomDrawerContent from "./src/component/CustomDrawerContent";
import Home from "./src/pages/Home";
import LimitAdjust from "./src/pages/LimitAdjust";
import TempAdjust from "./src/pages/TempAdjust";
import Historic from "./src/pages/Historic";
import ScreenNotConnections from "./src/component/ScreenNotConnections";
import FlashMessage from "react-native-flash-message";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowAlert: true,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }
  try {
    token = (await Notifications.getExpoPushTokenAsync()).data;
    const tokensRef = await doc(firestore, "tokens", token);
    await setDoc(tokensRef, { token });
  } catch (error) {
    alert(error)
  }
}

const DrawerNavigation = () => {

  return(
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width:Dimensions.get('window').width*0.86
        },
      }}
      initialRouteName="Inicio"
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Inicio"
        component={Home}
        options={{
          headerShown: false,            
          drawerItemStyle: {
            display: "none",
          },
        }}
      />

      <Drawer.Screen
        name="Limite de umidade"
        component={LimitAdjust}
        options={{
          headerShown: false,
          drawerIcon: ({ size }) => (
            <Image
              style={{
                width: RFValue(24),
                height: RFValue(24),
              }}
              source={require('./src/assets/ajuste.png')}
            />
          ),
          drawerItemStyle: {
            marginLeft: RFValue(20),
          },
          drawerLabelStyle: {
            fontSize: RFValue(16),
            color: 'rgba(232, 232, 232, 0.8)'
          },
        }}
      />
      
      <Drawer.Screen
        name="Limite de  tempo"
        component={TempAdjust}
        options={{
          headerShown: false,
          drawerIcon: ({ size }) => (
            <Image
              style={{
                width: RFValue(24),
                height: RFValue(24),
              }}
              source={require('./src/assets/tempo.png')}
            />
          ),
          drawerItemStyle: {
            marginLeft: RFValue(20),
          },
          drawerLabelStyle: {
            fontSize: RFValue(16),
            color: 'rgba(232, 232, 232, 0.8)'
          },
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {

  const [internetAcessible, setInternetAcessible] = useState(true);

  if (!global.btoa) {  global.btoa = encode }

  if (!global.atob) { global.atob = decode }

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setInternetAcessible(state.isInternetReachable);
    });

    registerForPushNotificationsAsync();
  }, []);

  return (
    <>
      {internetAcessible ?
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerNavigation"
            // screenOptions={}
            style={{
              backgroundColor: '#171718'
            }}
          >

            <Stack.Screen
              name="DrawerNavigation"
              component={DrawerNavigation}
              options={() => ({
                headerShown: false
              })}
            />

          <Stack.Screen
              name="Historico"
              component={Historic}
              options={{
                headerShown: false,            
                drawerItemStyle: {
                  display: "none",
                },
              }}
            />

          </Stack.Navigator>
          <FlashMessage position={'top'}/>
        </NavigationContainer> :
        <ScreenNotConnections />
      }
    </>
  );
}