// 
import * as React from 'react';

//
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 
import HomeScreen from './screen/HomeScreen';
import Calendar from './screen/Calender';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mobile Gamification" component={HomeScreen} />
        <Stack.Screen name="Calender" component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




















// // 
// import * as React from "react";

// // 声明拓展件
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Button, Card} from 'react-native-paper';
// import {ScreenStack} from "react-native-screens";
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// // 声明其他JS文件位置
// import HomeScreen from './screen/HomeScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//         <NavigationContainer>
//           <Stack.Navigator>

//             <Stack.Screen name = "Home" component = {HomeScreen} />

//           </Stack.Navigator>
//         </NavigationContainer>
//   );
// }