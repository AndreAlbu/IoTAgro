import React from "react";
import { StatusBar } from 'expo-status-bar';
import {decode, encode} from 'base-64';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from "react-native";

import CustomDrawerContent from "./src/component/CustomDrawerContent";
import Home from "./src/pages/Home";
import Details from "./src/pages/Details";
import LimitAdjust from "./src/pages/LimitAdjust";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return(
    <>
      <StatusBar style="light" />
      <Drawer.Navigator
        initialRouteName="Home"
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,            
            drawerItemStyle: {
              display: "none",
            },
          }}
        />

        <Drawer.Screen
          name="Ajustar Limite"
          component={LimitAdjust}
          options={{
            headerShown: false,
            drawerItemStyle: {
              marginLeft: 30
            },
            drawerLabelStyle: {
              fontSize: 22
            },
            drawerIcon: ({ size }) => (
              <Image
                size={size}
                source={require('./src/assets/adjust.png')}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </>
  )
}

export default function App() {

  if (!global.btoa) {  global.btoa = encode }

  if (!global.atob) { global.atob = decode }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigation">

        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={() => ({
            headerShown: false
          })}/>

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}