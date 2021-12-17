import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserPerfil from './UserPerfil';
import UserCancel from './UserCancel';
import { Button, Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native'


const Stack = createStackNavigator()

export default props => {
    return (
        
        <NavigationContainer >
            
            <Stack.Navigator 
                initialRouteName="UserPerfil"
                screenOptions={screenOptions}>
                    

                <Stack.Screen
                    name="UserPerfil"
                    component={UserPerfil}
                    options={({ navigation }) => {
                        return {
                            title: "Editar Perfil",
                            headerRight: () => (
                                <Button 
                                    onPress={() => navigation.navigate('UserCancel')}
                                    type="clear"
                                    icon={<Icon name="delete" size={25} color="#e5e5e5" />}
                                />
                                
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="UserCancel"
                    component={UserCancel}
                    options={{
                        title: "Cancelar Assinatura"
                    }}
                />
            </Stack.Navigator>
            
        </NavigationContainer>
        
    )
}

const screenOptions ={
    headerStyle: {
        backgroundColor: '#E50914'
    },
    headerTintColor: '#e5e5e5',
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#141414',
        flexGrow: 1,
    }
})
