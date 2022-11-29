import { StyleSheet, Text, View, Component} from 'react-native';
import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Quadras from '../Home';
import Database from '../Database'




export default function Profile(route,navigation) {

const id = route.params ? route.params.id : undefined;   
const [nomeQuadra, setnomeQuadra] = useState(''); 
const [enderecoQuadra, setEnderecoQuadra] = useState('');
const [Esportes, setEsportes] = useState('');
let savedItems = []

  useEffect(() => {
    if(!route.params) return;
    setnomeQuadra(route.params.nomeQuadra);
    setEnderecoQuadra(route.params.enderecoQuadra);
    setEsportes(route.params.Esportes);
  },[route])
  


  function handleDescriptionChange1(nomeQuadra,enderecoQuadra,Esportes){ setnomeQuadra(nomeQuadra),setEnderecoQuadra(enderecoQuadra),setEsportes(Esportes); } 
  function handleDescriptionChange2(enderecoQuadra){ setEnderecoQuadra(enderecoQuadra); }
  function handleDescriptionChange3(Esportes){ setEsportes(Esportes); }

async function handleButtonPress(){ 
  
 
  console.log({   id: new Date().getTime(), nomeQuadra, enderecoQuadra,Esportes});
  const listItem = {id: new Date().getTime(), descricao, quantidade: parseInt(quantidade)};
  let savedItems = [];
  const response = await AsyncStorage.getItem('items');
  
  if(response) savedItems = JSON.parse(response);
  savedItems.push(listItem);
 
  await AsyncStorage.setItem('items', JSON.stringify(savedItems));
  navigation.navigate("AppList", listItem);

 // navigation.navigate(Quadras);
}
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para comprar</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
        onChangeText={handleDescriptionChange1}
             style={styles.input} 
             placeholder="Nome da quadra"
             value={nomeQuadra}
              clearButtonMode="always" /> 
           
        <TextInput 
        onChangeText={handleDescriptionChange2}
              style={styles.input}  
              placeholder="Endereco" 
              value={enderecoQuadra}

         // keyboardType={'numeric'}
             clearButtonMode="always" /> 
          <TextInput 
          onChangeText={handleDescriptionChange3}
              style={styles.input} 
              placeholder="Esportes Possiveis"
              value={Esportes}
              clearButtonMode="always" /> 
             
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}> 
        <Text style={styles.buttonText}>Salvar</Text> 
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
  }


 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#008000',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
    },
    inputContainer: {
      flex: 1,
      marginTop: 30,
      width: '90%',
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
    input: {
      marginTop: 10,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'stretch'
    },
    button: {
      marginTop: 10,
      height: 60,
      backgroundColor: 'green',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      shadowOpacity: 20,
      shadowColor: '#ccc',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    }
  });