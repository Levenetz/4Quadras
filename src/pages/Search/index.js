import { StyleSheet, Text, View, Component, useEffect, useState } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableOpacity } from 'react-native';
export default function Search() {
  return (
    
      <View style={styles.container}>
        <Text style={styles.title}>Item para comprar</Text>
        <View style={styles.inputContainer}> 
          <TextInput 
            style={styles.input} 
            placeholder="Nome Do Cliente"
            clearButtonMode="always" /> 
          <TextInput 
            style={styles.input}  
            placeholder="CPF" 
  
            keyboardType={'numeric'}
            clearButtonMode="always" /> 
            <TextInput 
                   style={styles.input} 
                    placeholder="Email"
            keyboardType={'email-address'}
            clearButtonMode="always" /> 
            
          <TouchableOpacity style={styles.button}> 
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