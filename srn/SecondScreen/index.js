import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <View style={styles.circular}></View>
                <Text style={styles.itemText}>{props.text + "                                           00/00/000"}</Text>
            </View>
            <br></br>
            
           
        </View>
    )
}

const styles = StyleSheet.create({
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
       
    },

    itemText: {
        fontFamily: 'Arial',
        
        textAlign: 'center',
        color: "#ffff"
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;