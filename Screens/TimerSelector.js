import React from 'react';
import { Text, View, StyleSheet, Button, TextInput, useState } from 'react-native';

/*
Use of the navigator to add the selector to the stack. 
Use the style sheet to add a background color (Hexadecimal codes also work).
The buttons allow access to each of the timer screens. When pressed it automatically
navigates there.
*/

const TimerSelector = ({ navigation }) => {
    return (
    <View style={{
        
        backgroundColor: 'white',
        flex:1
    }}>
        
        <Text style={styles.headings}>Select Timer Duration</Text>
        <Text></Text>
        <Button title="1 Hour" onPress={() => navigation.navigate('Study Timer1')}/>
        <Button title="2 Hours" onPress={() => navigation.navigate('Study Timer2')}/>
        <Button title="3 Hours" onPress={() => navigation.navigate('Study Timer3')}/>
    </View>
    );
}
export default TimerSelector;

const styles = StyleSheet.create({
    headings: {
      fontSize: 30,
      color: "#000",
      textAlign: 'center'
    },
  });
