import React from 'react';
import { Text, View, StyleSheet, Button, TextInput, useState } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';



const StudyTimer2 = ({navigation}) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [secondsLeft] = React.useState(7200);


  return (
    <View style= {styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={secondsLeft} //Enter time here
       
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7200, 3600, 1800, 0]}
        onComplete={() => ({ shouldRepeat: false, delay: 2 })}>
    
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 25 }}>
          {Math.floor(remainingTime /60 / 60)} Hours {Math.floor((remainingTime / 60) % 60)} Minutes {Math.floor(remainingTime % 60)} Seconds
         
        </Text>
      )}
    </CountdownCircleTimer>
      <Button title="Start" onPress={() => setIsPlaying(true)} />
      <Button title="Stop" onPress={() => setIsPlaying(false)} />
    </View>
  )

  }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    fontSize: 30,
  },
  time: {
    color: '#000',
    textAlign: 'center',
    fontSize: 30,
  }
});

export default StudyTimer2;
