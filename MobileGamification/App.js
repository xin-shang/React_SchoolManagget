import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
        <TouchableOpacity style = {styles.button1}>
          <Text>Calendar</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
  
  function runCalender () {

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button1: {
    width:150,
    Height:80,
    backgroundColor: "skyblue",
    borderRadius:5,
    justifyContent: "center",
    alignItems: "center"
  }

});
