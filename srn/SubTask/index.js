import React from 'react'
import {View, Text} from 'react-native'
import App2 from '../SubTaskscreen'

export default function SubTask(navigation){
    return (
        <View>
            <Text>Subtask</Text>
            <Text onPress={() => navigation.navigate (App2)}>Subtask</Text>
        </View>
    )
}