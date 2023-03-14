import React from "react";
import {decode, encode} from 'base-64';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from "./src/component/CustomDrawerContent";
import Home from "./src/pages/Home";
import LimitAdjust from "./src/pages/LimitAdjust";
import Historic from "./src/pages/Historic";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return(
    <Drawer.Navigator
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
        name="Ajustar Limite"
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
    </Drawer.Navigator>
  )
}

export default function App() {

  if (!global.btoa) {  global.btoa = encode }

  if (!global.atob) { global.atob = decode }

  return (
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
    </NavigationContainer>
  );
}