import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const MyStack = () => {

  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />


    </Stack.Navigator>
  )
};
