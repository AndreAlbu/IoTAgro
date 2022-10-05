import React from "react";
import { StatusBar } from 'expo-status-bar';
import {decode, encode} from 'base-64';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';

import Home from "./src/pages/Home";
import Details from "./src/pages/Details";
import LimitAdjust from "./src/pages/LimitAdjust";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Test = () => {
  return(
    <>
      <StatusBar style="light" />
      <Drawer.Navigator initialRouteName="Home" useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerTintColor: "#f92e6a",
            
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
            headerTintColor: "#f92e6a"
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
      <Stack.Navigator initialRouteName="Test">

        <Stack.Screen
          name="Test"
          component={Test}
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