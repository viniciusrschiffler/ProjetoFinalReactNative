import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";

// Componentes da rota
// import Login from "./src/screens/Login/Index";
import CadastrarCliente from "./src/screens/CadastrarCliente/Index";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CadastrarCliente"
        headerMode="none"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="CadastrarCliente" component={CadastrarCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
