import React from "react";
import { View, Text, Image, TouchableHighlight, TextInput, Button } from "react-native";

import Styles from "./Styles";

const Login = ({ navigation }) => {
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.containerTopo}>
          <Image
            style={Styles.image}
            source={require("./../../../assets/img/Login/logo.png")}
          />
          <Text style={Styles.privacid}>PRIVACIDADE</Text>
        </View>
        <Text style={Styles.descricaoF}>
          Filmes, séries e muito mais, sem limites
        </Text>
        <Text style={Styles.descricao}>
          Assista onde quiser. Cancele quando quiser.
        </Text>
        <View style={Styles.buscaBox}>
          <TextInput style={Styles.buscaInput} placeholder="Login" />

          <TextInput style={Styles.buscaInput} placeholder="Senha" />
          <TouchableHighlight
            style={Styles.buttonRed}
            onPress={() => navigation.navigate("")}
          >
            <Text style={Styles.buttonTextoRed}>Entrar</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={Styles.buttonRed}
            onPress={() => navigation.navigate("")}
          >
            <Text style={Styles.buttonTextoRed}>Cadastrar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

export default Login;
