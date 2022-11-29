import { TouchableOpacity, StyleSheet, Text, View, ScrollView,  SafeAreaView, Platform} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import AppItem from '../Home/appItem'
import React, {useEffect, useState} from 'react';
import Database from '../Database';


const statusBarHeight = StatusBar.currentHeight;

export default function Quadra({ route,navigation}) {
  
const [items, setItems] = useState([
 // {id:1, nomeQuadra:"issosss",endereco:" isjsj", Esportes:" ssd"},
 // {id:2, nomeQuadra:"issosss",endereco:" isjsj", Esportes:" ssd"}
])
    useEffect(() => { Database.getItems().then(items => setItems(items));},[route]);

  return (
    <View style={styles.container}>
    <StatusBar style="light" />
    <Text style={styles.title}>Lista das Quadras</Text>
    <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}>
        { items.map(item => {
            return <AppItem key={item.id} id={item.id} item={item.nomeQuadra + '  Fica em ' + item.endereco + ' os Esportes disponiveis sao' + item.Esportes}navigation={navigation} />
        }) }
    </ScrollView>
</View>
);
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  scrollContainer: {
    flex: 1,
    width: '90%'
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
});
  //let savedItens = []
  

