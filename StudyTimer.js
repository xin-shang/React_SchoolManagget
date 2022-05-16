import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import reactNativeBackgroundTimer from 'react-native-background-timer';


const StudyTimer = ({navigation}) => {

  const [secondsLeft, setSecondsLeft] = useState(3601);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    if(timerOn) startTimer();
    else reactNativeBackgroundTimer.stopBackgroundTimer();
    
    return () => {
      reactNativeBackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  useEffect(() => {

    if(secondsLeft === 0) 
      reactNativeBackgroundTimer.stopBackgroundTimer();
  }, [secondsLeft])

  //Starts the timer and checks it each second. If running, it will reduce timer by 1 second.
  const startTimer = () => {
    reactNativeBackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if(secs > 0) return secs - 1
        else return 0;
      });
    }, 1000);
  };

  // Takes remaining time and converts into a time format of HH:MM:SS
  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let mins = Math.floor(secondsLeft / 60 % 60);
    let seconds = Math.floor(secondsLeft % 60);

    let displayHours = hours < 10 ? '0${hours}' : hours;
    let displayMins = mins < 10 ? '0${mins}' : mins;
    let displaySeconds = seconds < 10 ? '0${seconds}' : seconds;

    return {
      displayHours, 
      displayMins, 
      displaySeconds
  };
};
  

return (
  <View style = {styles.container}>
    <Text style = {styles.time}>
      {clockify().displayHours}Hours 
      {clockify().displayMins}Mins 
      {clockify().displaySeconds}Seconds
      </Text>
    <Button title= "Start/Stop" 
    onPress = {() => setTimerOn((current) => !current)}> </Button>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
  },
  time: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
  },
})

export default StudyTimer;