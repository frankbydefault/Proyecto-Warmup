import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Historial from "./screens/Historial";
import InicioHeader from "./screens/Inicio";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  //NavBar
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#ff4d4d"
      barStyle={{ backgroundColor: "#444" }}
    >
      <Tab.Screen
        name="Feed"
        component={InicioHeader}
        options={{
          tabBarLabel: "CAE",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Historial"
        component={Historial}
        options={{
          tabBarLabel: "Historial",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
