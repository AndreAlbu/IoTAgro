import React from "react";
import {decode, encode} from 'base-64';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomDrawerContent from "./src/component/CustomDrawerContent";
import Home from "./src/pages/Home";
import LimitAdjust from "./src/pages/LimitAdjust";
import Historic from "./src/pages/Historic";

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
              <Icon name='tune-variant' size={size} color='#FFF' />
          ),
          drawerItemStyle: {
            marginLeft: 30,
          },
          drawerLabelStyle: {
            fontSize: 22,
            color: '#FFF'
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
      <StatusBar
        backgroundColor="#171718" animated={true} barStyle="light-content"
      />
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