import React from 'react';
import { View,Text,TouchableOpacity, FlatList,Image} from 'react-native';
import {  Title } from 'react-native-paper';
import {styles} from '../../screens/Home/styles'

 export const Previas = () =>{
     return(
        
        <View style={styles.previaContainer}>
        <Title style={styles.previasText}>Prévias</Title>
        <FlatList 
        horizontal
        style={styles.flatListContainer}
        keyExtractor={(item) => item}
        data={[1,2,3,4,5,6]}
        renderItem={({item, index})=>(
            <TouchableOpacity key={index} style={{marginLeft: index == 0 ? 20 : 0 , marginRight: 10}}>
              <View style={styles.oval}>
                <Image style={styles.capa} source={require('../../assets/destaque.jpg')}/>
                <Text style={styles.logo}>Bird Box</Text>
              </View> 
            </TouchableOpacity>
        )}
        />
      </View>
     );
 }