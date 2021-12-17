import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login/Index';
import { CadastrarCliente } from '../screens/CadastrarCliente/Index'
import Film from '../screens/Filme'
import { MyTabs } from './Tabs.routes'

const Stack = createStackNavigator();

export const MyStack = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>

      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="Cadastrar"
        component={CadastrarCliente}
      />

      <Stack.Screen
        name="movies"
        component={Film}
      />

      <Stack.Screen
        name="tabs"
        component={MyTabs}
      />


    </Stack.Navigator>
  )
};
