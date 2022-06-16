import { useState } from 'react';
import * as React from 'react';
import { NavegationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navegation/native-stack';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './srn/SecondScreen/index.js';
import SubTask from './srn/SubTask/index.js';
/*import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(

  {
    name:'MainDB',
    location:'default'
  },
  () => { },
  error => { console.log(error) }

);
*/

export default function App() {

  const Stack = createStackNavigator();

  <View>
    <NavegationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Task" component={Task}></Stack.Screen>
        <Stack.Screen name="SubTask" component={SubTask}></Stack.Screen>
      </Stack.Navigator>
    </NavegationContainer>
  </View>



  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  //const [nome, setNome] = useState('');
  const [date, setDate] = useState();
  /*
    const creatTable = () => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS"
          +"Tarefas "
          +"(ID INTERGER PRIMARY KEY AUTOINCREMENT, Nome TEXT, Data TEXT );"
        )
      })
    }*/

  const AdicionarTarefa = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task, date])
    setTask(null);

    /*db.transaction((tx) => {
       tx.executeSql(
         "INSERT INTO Tarefas (Nome, Data) VALUES (?,?)",
         [nome, data]
       )
     })*/
  }

  const completarTarefa = (index) => {
    let copiarItem = [...taskItems];
    copiarItem.splice(index, 1);
    setTaskItems(copiarItem)
  }


  return (

    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'>

        <View style={styles.tasksWrapper}>
          <Text style={styles.titulo}>Gerenciador de Tarefas</Text>
          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completarTarefa(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

      </ScrollView>


      <KeyboardAvoidingView>
        <TextInput style={styles.input} placeholder={'Adicione uma Tarefa'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => AdicionarTarefa()}>
          <View style={styles.addTarefa}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#190711',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#948945',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addTarefa: {
    width: 50,
    height: 50,
    backgroundColor: '#948945',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});