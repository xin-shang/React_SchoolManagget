// 
import * as React from 'react';

//
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 
import HomeScreen from './screen/HomeScreen';
import Calendar from './screen/Calender';
import Achievement from './screen/Achievement';
import InGameStore from './screen/InGameStore';

const Stack = createNativeStackNavigator();

// 标题是可以去掉的 在Stack.Navigator后面 + headerMode=“none”
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Mobile Gamification Home'>
        <Stack.Screen name="Mobile Gamification Home" component={HomeScreen}/>
        <Stack.Screen name="Calender" component={Calendar}/>
        <Stack.Screen name="Achievement" component={Achievement}/>
        <Stack.Screen name="InGameStore" component={InGameStore}/>
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