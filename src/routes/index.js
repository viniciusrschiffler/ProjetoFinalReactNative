import * as React from 'react';

import PageFilm from '../screens/Filme/index';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Routes = () => {
  
  const Stack = createStackNavigator();
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Página de filme"
          component={PageFilm}
          options={{
            headerShown: false,
          }}
        />


        </Stack.Navigator>
      </NavigationContainer>
  )
};

export default Routes;
