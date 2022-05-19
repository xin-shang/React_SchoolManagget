// //
// import * as React from "react";

// // 声明拓展件
// import { ScrollView, StyleSheet } from 'react-native';
// import { Button, Card } from 'react-native-paper';
// //import { DefaultTheme } from 'react-native-paper';



// //
// function HomeScreen () {
//     return (
//         <ScrollView>
//             <Card>
//                 <Card.Title title = "Home Screen" />
//             </Card>
//         </ScrollView>
//     );
// }

// // 默认导出
// export default HomeScreen

// const styles = StyleSheet.create ({
//     //背景颜色，填充顶部10？
//     scrollView: {
//         backgroundColor: 'skyblue',
//         paddingTop: 10
//     },
//     // 左边界自动留白，右边界自动留白？
//     card: {
//         width: '90%',
//         marginLeft: 'auto',
//         marginRight: 'auto'
//     }
// });

//
import * as React from "react";

//
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 
import Calendar from "./Calender";

const Stack = createNativeStackNavigator();

// HomeScreen 
function HomeScreen () {
    return (
        <ScrollView>
            <Card>
                <Card.Title title = "Home Screen" />
               
                <TouchableOpacity style = {styles.but} >
                  <Text>Calendar</Text>
                </TouchableOpacity>

                <View style = {styles.line}></View>

                <TouchableOpacity style = {styles.but}>
                  <Text>In-Game Store</Text>
                </TouchableOpacity>

                <View style = {styles.line}></View>

                <TouchableOpacity style = {styles.but}>
                  <Text>Achievements</Text>
                </TouchableOpacity>

                <View style = {styles.line}></View>

                <TouchableOpacity style = {styles.but}>
                  <Text>Profile Themes</Text>
                </TouchableOpacity>
            </Card>
        </ScrollView>
    );
}

export default HomeScreen;

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

    // 线
    line:
    {
        width: '90%',
        height: 1,
        backgroundColor: "#808080",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    
    // 按钮_1
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