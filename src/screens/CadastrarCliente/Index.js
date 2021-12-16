import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from "react-native";

import Styles from "./Styles";
import Header from "../../Componentes/Header/Header";

const CadastrarCliente = ({ navigation }) => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={Styles.container}>
          <Text style={Styles.descricaoF}>Informe seus Dados Pessoais</Text>
          <View style={Styles.buscaBox}>
            <TextInput style={Styles.buscaInput} placeholder="Nome Completo" />
            <TextInput style={Styles.buscaInput} placeholder="CPF" />
            <TextInput
              style={Styles.buscaInput}
              placeholder="Data de Nascimento"
            />
            <Text style={Styles.descricaoF}>Informe seu Endereço</Text>
            <TextInput style={Styles.buscaInput} placeholder="Cep" />
            <TextInput style={Styles.buscaInput} placeholder="Rua" />
            <TextInput style={Styles.buscaInput} placeholder="Número" />
            <TextInput style={Styles.buscaInput} placeholder="Complemento" />
            <TextInput style={Styles.buscaInput} placeholder="Bairro" />
            <TextInput style={Styles.buscaInput} placeholder="Cidade" />
            <TextInput style={Styles.buscaInput} placeholder="Estado" />
            <Text style={Styles.descricaoF}>Informe Dados de Login</Text>
            <TextInput style={Styles.buscaInput} placeholder="Email" />
            <TextInput
              style={Styles.buscaInput}
              placeholder="Nome de usúario"
            />
            <TextInput style={Styles.buscaInput} placeholder="Senha" />
            <TouchableHighlight
              style={Styles.buttonRed}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={Styles.buttonTextoRed}>Salvar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CadastrarCliente;
