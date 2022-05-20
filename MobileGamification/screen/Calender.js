// 
import * as React from "react";

// 
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { pxToDp, pxToDp_H, pxToDp_W, screenHeight, screenScale, screenWidth} from '../tools/PixelTransform';

// 
function Calendar () {
    return (
      <>
      <ScrollView>
        
        {/*日历的上半部分 日历主体 The top half of the calendar, calendar subject.*/}
        <View style = {styles.box_TopScreen}>
          
          {/*选择年份，选择月份，返回当今日 Select year, select month, return to today*/}
          <View style = {styles.box_TopHeader}>
            {/**
             * Butten_1 Select year
             * Butten_2 Select month
             * Butten_3 Return Today
             */}
            <Text>Select year, select month, return to today</Text>
            


          </View>
          {/*END*/}

          <View style = {styles.line_1}></View>

          {/*日期主体，横5纵7 Date body, horizontal 5 vertical 7*/}
          <View style = {styles.box_DateBody}>
            {/**
             * H 5 
             * V 7
             * Every One:
             *  date
             *  task(If have)
             *  class(If have)
             */}
            <Text>Date body, horizontal 5 vertical 7</Text>
            <Text>W: {width}</Text>
            <Text>H: {height}</Text>
            <Text>Scalea: {scale}</Text>


          </View>
          {/*END*/}

        </View>
        {/*END*/}

        <View style = {styles.line_2}></View>

        {/*日历的下半部分,被选中天的详细信息  The lower half of the calendar, Details of the selected day.*/}
        <View style = {styles.box_LowerScreen}>
          <Text>The lower half of the calendar, Details of the selected day.</Text>
          {/**
           * 
           */}



        </View>
        {/*END*/}
      </ScrollView>
      </>
    );
}

export default Calendar;




const styles = StyleSheet.create({
  
  //height: 630 = 70 + 560
  box_TopScreen: {
    width: pxToDp_W(390),
    height: pxToDp_H(630),
    backgroundColor: "#C0C0C0",
    borderRadius: 12,
  },

  box_TopHeader: {
    width: pxToDp_W(385),
    height: pxToDp_H(60),
    //学校校徽的蓝色 The school emblem's blue
    backgroundColor: "#000090",
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },

  box_DateBody: {
    width: pxToDp_W(385),
    height: pxToDp_H(560),
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  box_LowerScreen: {
    width: pxToDp_W (390),
    height: pxToDp_H(560),
    backgroundColor: "#ffe4c4",
    borderRadius: 12,
  },

  line_1: {
    width: '98%',
    height: 1,
    backgroundColor: "#00FFFF",
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  line_2: {
    width: '98%',
    height: 2,
    backgroundColor: "#000000",
    marginLeft: 'auto',
    marginRight: 'auto',
  }

})

const {width, height, scale} = Dimensions.get("window")