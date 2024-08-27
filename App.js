import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function App(){
  return(
   <View style={styles.container}>
      <Image source={require('./src/crono.png')}/>

      <Text style={styles.timer}>00:00:00</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>
   </View>
  );
};

//
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    fontWeight: 'bold',
    fontSize: 45,
    color: '#fff'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 17,
    height: 40,
    borderRadius:10
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }
})




