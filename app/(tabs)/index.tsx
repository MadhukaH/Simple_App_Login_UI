import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Eazy Shopping</Text>
      <Image source={{uri:'https://i.postimg.cc/KYQm460G/logo.png'}} style={Styles.logo}/>

      <TextInput placeholder="Username" style={Styles.input}/>
      <TextInput placeholder="Password" style={Styles.input}/>

      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>Singup</Text>
      </TouchableOpacity>
                      
    </View>
  );
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor:'#E6E6FA',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },

    title: {
        fontSize:25,
        fontWeight: 'bold',
        marginBottom:50,
        color:'#483D8B'
    },

    logo: {
        width:110,
        height:150,
        borderRadius:10,
        marginBottom:80,
        
    },

    input: {
        width: '80%',
        height:40,
        backgroundColor:'#FFF',
        borderRadius:5,
        marginVertical:10,
        paddingHorizontal:10,
    },

    button: {
        width: '80%',
        height: 40,
        backgroundColor:'#9370DB',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 5,
    },

    buttonText: {
        fontSize: 16,
        fontWeight:'bold',
        color:'#FFFFFF'
    },
})