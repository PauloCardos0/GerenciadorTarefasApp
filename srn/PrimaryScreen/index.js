import React from 'react';
import { Image,
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView, Button,
    ImageBackground } from 'react-native';


const Inicial = (props) => {

    return (
      <View> 
        <a helf="/gtarefas/srn/SecondScreen">
          <Button>Clica aqui</Button>
        </a>
      </View>

    )
}

const styles = StyleSheet.create({
    background: {
     flex : 1,
     alignItems: 'center',
     justifyContent: 'center',
    },
    
    botao: {
      backgroundColor: '#F0187F',
      borderRadius: 14,
      alignItems: 'center'
    },
    textoBotao:{
      fontFamily: 'Mplus 1p Bold',
      fontStyle: normal,
      fontWeight: 700,
      fontSize: 12,
      lineHeight: 18,
      textAlign: center,
      color: '#160101',
  },
  
  textoTopo : {
    fontFamily: 'Londrina Solid',
    fontStyle: normal,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#FFFFFF',
    }
  
  })
export default Inicial;