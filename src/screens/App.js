import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserPerfil from './Perfil/UserPerfil';
import UserCancel from './Perfil/UserCancel';

const Stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="UserPerfil"
                screenOptions={screenOptions}>

                <Stack.Screen 
                    name="UserPerfil"
                    component={UserPerfil}
                />
                <Stack.Screen 
                    name="UserCancel"
                    component={UserCancel}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}