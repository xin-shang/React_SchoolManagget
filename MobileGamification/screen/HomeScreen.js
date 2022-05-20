//
import * as React from "react";

//
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Card } from 'react-native-paper';
// 
import Calendar from "./Calender";

const Stack = createNativeStackNavigator();

// HomeScreen onPress = {() => navigation.nevigate}
function HomeScreen ({navigation}) {
    return (
        <ScrollView>
            <Card>
                <Card.Title title = "Select:" />
               
                <TouchableOpacity style = {styles.but} onPress = {() => navigation.navigate('Calender')}>
                  <Text>Calendar</Text>
                </TouchableOpacity>

                <View style = {styles.line}></View>

                <TouchableOpacity style = {styles.but} onPress = {() => navigation.navigate('InGameStore')}>
                  <Text>In-Game Store</Text>
                </TouchableOpacity>

                <View style = {styles.line}></View>

                <TouchableOpacity style = {styles.but} onPress = {() => navigation.navigate('Achievement')}>
                  <Text>Achievement</Text>
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
