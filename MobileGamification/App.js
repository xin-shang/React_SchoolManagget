// 新
import * as React from 'react';

//
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mobile Gamification" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// HomeScreen 
function HomeScreen () {
    return (
        <ScrollView>
            <Card>
                <Card.Title title = "Home Screen" />
                <TouchableOpacity style = {styles.but}>
                  <Text>Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.but}>
                  <Text>In-Game Store</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.but}>
                  <Text>Achievements</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.but}>
                  <Text>Profile Themes</Text>
                </TouchableOpacity>
            </Card>
        </ScrollView>
    );
}


// 各种效果
const styles = StyleSheet.create ({
    
    //背景颜色，填充顶部10？
    scrollView: 
    {
        backgroundColor: 'skyblue',
        paddingTop: 10
    },
    
    // 左边界自动留白，右边界自动留白？
    card: 
    {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    
  //按钮_1
    but: 
    {
        width: "100%",
        height: 60,
        backgroundColor: "skyblue",
        borderRadius: 25,
        justifyContent: "center", //字体居中
        alignItems: "center",
    }
});























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