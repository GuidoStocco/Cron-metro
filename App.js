import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

let tempo = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App(){
  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState("Iniciar");
  const [timer, setTimer] = useState(null);

  function iniciar(){
    if(tempo !== null){
      //vai parar o tempo
      clearInterval(tempo)
      tempo = null
      setBotao('Iniciar')
    } else{
      //vai continuar o tempo
      tempo = setInterval(() => {
        ss++

        if(ss == 60){
          ss = 0
          mm++
        };

        if(mm == 60){
          mm = 0
          hh++
        };

        let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm)
        + ':' + (ss < 10 ? '0' + ss : ss)

        setNumero(format)
      }, 1000);
      setBotao('Parar')
    }
  }

  function limpar(){
    if(tempo !== null){
      clearInterval(tempo)
      tempo = null
    }

    setTimer(numero)
    setNumero(0)
    ss = 0;
    mm = 0;
    hh = 0;

    setBotao("Iniciar");
  }


  return(
   <View style={styles.container}>
      <Image source={require('./src/crono.png')}/>

      <Text style={styles.timer}> {numero} </Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}> {botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.stopArea}>
      <Text style={styles.stopTimer}> {timer ? 'Ultimo tempo: ' + timer : ''} </Text>
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
  },
  stopArea:{
    marginTop: 40,
  },
  stopTimer:{
    fontStyle: 'italic',
    fontSize: 23,
    color: '#fff'
  }
})




