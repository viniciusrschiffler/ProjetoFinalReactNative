import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native'
import users from '../../data/users';

export default props => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNs, setDataNs] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');

    return (
        <View style={styles.container}>
            
            <TextInput style={styles.textInput} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#141414',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        width: '90%',
        height: 40,
        backgroundColor: '#e5e5e5', 
        borderRadius: 8,

    }
})

