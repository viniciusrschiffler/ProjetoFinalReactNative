import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserPerfil from './src/screens/Perfil/UserPerfil';
import UserCancel from './src/screens/Perfil/UserCancel';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserPerfil" component={UserPerfil} />
      <Stack.Screen name="UserCancel" component={UserCancel} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}