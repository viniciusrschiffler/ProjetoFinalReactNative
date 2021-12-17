import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import users from '../../data/users';

export default props => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setdataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');

    const editar = () => {
        //back
    }
    const user = {} 
    
      async function handleSubmit () {
        user.nome = nome
        user.email = email
        user.dataNascimento = dataNascimento
        user.cpf = cpf
        // user.endereco.cep = cep

        console.log (user)
      }

          useEffect (() => {
              async function getUser (){
                  const userData = await axios.get ("https://ecommerce-residencia.herokuapp.com/cliente/8")
                  user = userData
                  console.log (userData)
              }
              getUser()
          })      

   return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>
            
            <Image source={require('../../assets/img/netfliiix.png')}
                style={{
                width:100,
                height:27, 
                marginBottom: 30, 
                marginTop: -50}} 
                
            />
            
            <TextInput  
                placeholder="Nome completo" 
                style={styles.textInput} 
                onChangeText={text=>setNome(text)} 
            />

            <TextInput 
                placeholder="E-mail" 
                style={styles.textInput} 
                onChangeText={text=>setEmail(text)} 
            />
            
            <TextInput 
                keyboardType="numeric" 
                placeholder="Data de nascimento" 
                style={styles.textInput} 
                onChangeText={text=>setdataNascimento(text)} 
            />

            <TextInput 
                keyboardType="numeric" 
                placeholder="CPF" 
                style={styles.textInput} 
                onChangeText={text=>setCpf(text)} 
            />

            <TextInput 
                keyboardType="numeric" 
                placeholder="CEP" 
                style={styles.textInput} 
                onChangeText={text=>setCep(text)} 
            />


            <TouchableOpacity style={styles.btnEditar} onPress={()=>handleSubmit()}>
                <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>

         </View>
        </TouchableWithoutFeedback>
        

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#141414',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textInput:{
        width: '100%',
        height: 45,
        backgroundColor: '#e5e5e5', 
        borderRadius: 8,
        marginBottom: 40,
        paddingLeft: 10,
    },
    btnEditar:{
        backgroundColor: '#E50914',
        width: '50%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: -50,
        
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        
    },
});

