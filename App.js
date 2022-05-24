import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Button } from 'react-native';
//import Inicial from './srn/PrimaryScreen';
import Task from './srn/SecondScreen';

export default function App() {
  return (

    <View style={styles.container}>


      <ScrollView>


        <View style={styles.TituloTarefas}>
          <Text style={styles.sectionTitle}>Lista de Tarefas</Text>
          <View style={styles.items}>
            <Task text={"  Tarefa 1"} />
            <Task text={"  Tarefa 2"} />
            <Task text={"  Tarefa 3"} />
            <Task text={"  Tarefa 4"} />
            <Task text={"  Tarefa 5"} />
            <Task text={"  Tarefa 6"} />

          </View>

          <View style={styles.adicionarTarefa}>
            <Button
              title="Adicionar Tarefa"

            />
          </View>
        </View>

      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#190711',
    paddingHorizontal: 20,
  },
  TituloTarefas: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffff'

  },
  items: {
    marginTop: 30,
  },


  adicionarTarefa: {
    bottom: -85,
    borderRadius: '20px' ,
    marginLeft: 'auto',
    marginRight: 'auto',
    textalign: 'center',
    backgroundColor: '#948945',
    
    
  },
});
