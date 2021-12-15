import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserPerfil from './UserPerfil';
import UserCancel from './UserCancel';
import { Button } from 'react-native-elements';

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
                    options={() => {
                        return {
                            tittle: "Editar Perfil",
                            headerRight: () => (
                                <Button />
                                
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="UserCancel"
                    component={UserCancel}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions ={
    headerStyle: {
        backgroundColor: '#E50914'
    },
    headerTintColor: '#141414'
}