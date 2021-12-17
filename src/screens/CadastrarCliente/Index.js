import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from "react-native";
import serraApi from "../../service/serratecApi"; 

import Styles from "./Styles";
import Header from "../../Componentes/Header/Header";

const CadastrarCliente = ({ navigation }) => {
    const data={
      nome:'', 
      cpf: '',
      dataNascimento: '', 
      email: '', 
      usuario: '',
      endereco: {
      cep: '', 
      rua: '', 
      numero: '', 
      complemento: '', 
      bairro: '',
      cidade: '', 
      estado: '',
      }
    }
    function handleChangeData (value, variable) {
      if (variable == "nome") {
        data.nome = value
      } else if(variable == "Cpf") {
        data.cpf = value
      } else if(variable == "DataNascimento") {
        data.dataNascimento = value
      } else if(variable == "cep") {
        data.endereco.cep = value
      } else if(variable == "rua") {
        data.endereco.rua = value
      } else if(variable == "numero") {
        data.endereco.numero = value
      } else if(variable == "complemento") {
        data.endereco.complemento = value
      } else if(variable == "bairro") {
        data.endereco.bairro = value
      } else if(variable == "cidade") {
        data.endereco.cidade = value
      } else if(variable == "estado") {
        data.endereco.estado = value
      } else if(variable == "email") {
        data.email = value
      } else if(variable == "usuario") {
        data.usuario = value 
        }
    }
    function handleSubmit () {
      serraApi.post("/cliente", data)
    }
  return (
    <>
      <Header />
      <ScrollView>
        <View style={Styles.container}>
          <Text style={Styles.descricaoF}>Informe seus Dados Pessoais</Text>
          <View style={Styles.buscaBox}>
            <TextInput style={Styles.buscaInput} placeholder="Nome" onChange={e => handleChangeData(e.nativeEvent.text, "nome")} />
            <TextInput style={Styles.buscaInput} placeholder="CPF (Padrão Brasil)" onChange={e => handleChangeData(e.nativeEvent.text, "Cpf")}/>
            <TextInput
              style={Styles.buscaInput}
              placeholder="Data de Nascimento (yyyy-MM-dd'T'HH:mm:ss'Z)" onChange={e => handleChangeData(e.nativeEvent.text, "DataNascimento")}
            />
            <Text style={Styles.descricaoF}>Informe seu Endereço</Text>
            <TextInput style={Styles.buscaInput} placeholder="Cep" onChange={e => handleChangeData(e.nativeEvent.text, "cep")}/>
            <TextInput style={Styles.buscaInput} placeholder="Rua" onChange={e => handleChangeData(e.nativeEvent.text, "rua")}/>
            <TextInput style={Styles.buscaInput} placeholder="Número" onChange={e => handleChangeData(e.nativeEvent.text, "numero")}/>
            <TextInput style={Styles.buscaInput} placeholder="Complemento" onChange={e => handleChangeData(e.nativeEvent.text, "complemento")}/>
            <TextInput style={Styles.buscaInput} placeholder="Bairro" onChange={e => handleChangeData(e.nativeEvent.text, "bairro")}/>
            <TextInput style={Styles.buscaInput} placeholder="Cidade" onChange={e => handleChangeData(e.nativeEvent.text, "cidade")}/>
            <TextInput style={Styles.buscaInput} placeholder="Estado" onChange={e => handleChangeData(e.nativeEvent.text, "estado")}/>
            <Text style={Styles.descricaoF}>Informe Dados de Login</Text>
            <TextInput style={Styles.buscaInput} placeholder="Email" onChange={e => handleChangeData(e.nativeEvent.text, "email")}/>
            <TextInput
              style={Styles.buscaInput}
              placeholder="Usuario" onChange={e => handleChangeData(e.nativeEvent.text, "usuario")}
            />
            <TouchableHighlight
              style={Styles.buttonRed}
              onPress={() => handleSubmit()}
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