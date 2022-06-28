import React from 'react';
import { Text, View, StyleSheet, Button, TextInput, useState } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

/*
Set up navigation for Study Timer 3.
Create two consts. The first is a bool that determines whether the clock is running or not.
The second determines the time. The use state takes a parameter in seconds. 3600 seconds
equates to 3 hour.

All documentation for the Countdown Circle Timer can be found here:
https://www.npmjs.com/package/react-countdown-circle-timer

*/

const StudyTimer3 = ({navigation}) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [secondsLeft] = React.useState(10800);

/* 
The return statement that shows the method to the application.
The view style container calls on the Countdown Circle Timer method from the import statement.
It takes in some predetermined values: isPlaying a boolean to determine whether it runs on opening
duration is the duration of the timer in seconds
colors and colorsTime are to determine what colours are used (Hexadecimal codes must be used) and the
intervals at which they are called. 
onComplete occurs when the timer reaches 0 and whether it should loop again. 

Using the math function, we can convert the seconds into a HH::MM::SS format. time divide 60 twice will convert
the timer into hours. Using the modulo function, we look for a remainder. If its above 60, it will add one to hours,
otherwise it converts into minutes by dividing by 60. The seconds function is the same, except the remainder adds one to the 
minutes counter. 
*/

  return (
    <View style= {styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={secondsLeft} //Enter time here
       
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10800, 5400, 2700, 0]}
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

export default StudyTimer3;
