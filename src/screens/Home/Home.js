import React,{ useEffect, useState} from 'react';
import { View,Text,TouchableOpacity,ScrollView} from 'react-native';
import { Button, Title } from 'react-native-paper';
import { Destaque } from '../components/Destaque/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Previas } from '../components/Previas';
import { Carrosel } from '../components/Carrosel';


EStyleSheet.build();

 export const Home = () =>{
  

     return(
        <ScrollView style={styles.container}>
           <Destaque/> 
        
          
          <View style={styles.menuHeader}>
            <TouchableOpacity style={styles.menuBtn}>
              <Icon name='plus' style={{color:'#fff' }} size={25}/>
              <Text style={styles.textBtn}>Minha lista</Text>
            </TouchableOpacity>
            < Button icon='play' mode='contained'  color='#fff' style={styles.menuBtnP}>Assistir</Button>
            <TouchableOpacity style={styles.menuBtn}>
              <Icon name='information-outline' style={{color:'#fff' }} size={25}/>
              <Text style={styles.textBtn}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
          <Previas/>
         {[1,2,3,4].map((secao,index) =>(
            <Carrosel key={index}/>
            ))}
          
        </ScrollView>
     );
 } 