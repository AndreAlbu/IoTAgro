import React from "react";
import {decode, encode} from 'base-64'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/pages/Home";
import Details from "./src/pages/Details";

const Stack = createStackNavigator();

export default function App() {

  if (!global.btoa) {  global.btoa = encode }

  if (!global.atob) { global.atob = decode }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />

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