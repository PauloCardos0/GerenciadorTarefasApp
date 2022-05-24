import React from 'react';
import { Image,
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    ImageBackground } from 'react-native';


const Inicial = (props) => {

    return (
        <KeyboardAvoidingView style={style.background}>

      <ImageBackground> uri(https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F29%2F35%2F1f%2F29351fc35fcd3eebc73a27935796e95b.jpg&imgrefurl=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F230528074665400989%2F&tbnid=keu22XEXBDdTEM&vet=10CF4QMyiRAWoXChMI2M-x_L3z9wIVAAAAAB0AAAAAEAI..i&docid=Y9l_Pjuj0Pv2vM&w=750&h=1125&q=relogio%20com%20roxo&client=ubuntu&ved=0CF4QMyiRAWoXChMI2M-x_L3z9wIVAAAAAB0AAAAAEAI)</ImageBackground> 
      
      <View>
        <Text style ={style.textoTopo}>Gerenciamento de atividades</Text>
      </View>

      <TouchableOpacity style = {style.botao}>
        <Text style = {style.textoBotao}>Comecar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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