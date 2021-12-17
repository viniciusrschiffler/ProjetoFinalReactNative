import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Foundation, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import {colors} from '../Styles/colors';

import { Teste1 } from '../screens/teste1'
import { UnfinishedScreen } from '../screens/UnfinishedScreen'
import { Login } from '../screens/Login'

const Tab = createBottomTabNavigator();

export function MyTabs() {

  function setIcons(route, color, size) {
    
    if (route.name === 'Início') {
      return <Foundation name="home" size={size - 2} color={color} />;

    } else if (route.name === 'Jogos') {
      return <Ionicons name="ios-game-controller" size={size - 2} color={color} />

    }else if (route.name === 'Novidades') {
      return <MaterialCommunityIcons name="cards" size={size - 2} color={color} />

    }else if (route.name === 'Risadas rápidas') {
      return <FontAwesome5 name="smile-beam" size={size - 2} color={color} />

    }else if (route.name === 'Downloads') {
      return <MaterialCommunityIcons name="download-circle-outline" size={size - 2} color={color} />
    }
  }

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => setIcons(route, color, size),
      tabBarStyle: {backgroundColor: colors.background},
      tabBarActiveTintColor: '#fff',
    })}>

      <Tab.Screen name="Início" component={Teste1} />
      <Tab.Screen name="Jogos" component={Login} />
      <Tab.Screen name="Novidades" component={UnfinishedScreen} />
      <Tab.Screen name="Risadas rápidas" component={UnfinishedScreen} />
      <Tab.Screen name="Downloads" component={UnfinishedScreen} />
    </Tab.Navigator>
  );
}