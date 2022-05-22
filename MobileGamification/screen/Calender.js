// 
import * as React from "react";

// 
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Picker, Alert } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { pxToDp, pxToDp_H, pxToDp_W } from '../tools/PixelTransform';
import { Input } from "react-native-elements";
// import Picker from "@react-native-picker/picker";
import ModalDropdown from "react-native-modal-dropdown";


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
             * 
             */}
            {/* <Picker
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              -- ModalDropdown       onDropdownWillShow={() => {this.setState({typeShow:true})}}      //按下按钮显示按钮时触发
              -- ModalDropdown       onDropdownWillHide={() => this.setState({typeShow:false})}    //当下拉按钮通过触摸按钮隐藏时触发
              -- ModalDropdown       onSelect={this._selectType}    //当选项行与选定的index 和 value 接触时触发

            </Picker> */}
            
            <ModalDropdown 
              style = {styles.dropdown_Button}
              dropdownStyle = {styles.select_Box}
              defaultValue = {<Text>Year</Text>}
              textStyle = {styles.textSet}
              dropdownTextStyle = {styles.textSet}
              options={['2010', '2011', '2012', '2013', '2014', '2015', 
                        '2016', '2017', '2018', '2019', '2020', '2021', 
                        '2022', '2023', '2024', '2025', '2026', '2027', 
                        '2028', '2029', '2030']}
            />

            <View style={styles.mounth_Button}>
              <TouchableOpacity style = {styles.LR_Button}>
                <Text>Last</Text>
              </TouchableOpacity>

              <ModalDropdown
                style={styles.dropdown_Button}
                dropdownStyle = {styles.select_Box}
                defaultValue = {<Text>Month</Text>}
                textStyle = {styles.textSet}
                dropdownTextStyle = {styles.textSet}
                options={['Jan', 'Feb', 'Mar', 'Ari', 'May', 'Jun', 'Jul', 'Aut', 'Sep', 'Oct', 'Nov', 'Dec']}
              />
              
              <TouchableOpacity style = {styles.LR_Button }>
                <Text>Next</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style = {styles.today_Button}>
              <Text>Today</Text>
            </TouchableOpacity>




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




function getTodayButton () {
  Alert(today);
}

function lastMounth () {

}

function nextMounth () {

}





const styles = StyleSheet.create({
  
  //height: 630 = 70 + 560
  box_TopScreen: 
  {
      width: pxToDp_W(390),
      height: pxToDp_H(630),
      backgroundColor: "#C0C0C0",
      borderRadius: 12,
  },

  box_TopHeader: 
  {
      display: 'flex',
      flexDirection: 'row',
      width: pxToDp_W(385),
      height: pxToDp_H(60),
      //学校校徽的蓝色 The school emblem's blue
      backgroundColor: "#000090",
      borderRadius: 8,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 5,
      justifyContent: 'space-around'
  },

  box_DateBody: 
  {
      width: pxToDp_W(385),
      height: pxToDp_H(560),
      backgroundColor: "#FFFFFF",
      borderRadius: 8,
      marginLeft: 'auto',
      marginRight: 'auto',
  },

  box_LowerScreen: 
  {
      width: pxToDp_W (390),
      height: pxToDp_H(560),
      backgroundColor: "#ffe4c4",
      borderRadius: 12,
  },

  line_1: 
  {
      width: '98%',
      height: 1,
      backgroundColor: "#00FFFF",
      marginLeft: 'auto',
      marginRight: 'auto',
  },

  line_2: 
  {
      width: '98%',
      height: 2,
      backgroundColor: "#000000",
      marginLeft: 'auto',
      marginRight: 'auto',
  },

  // 下拉选择框效果
  dropdown_Button:
  {
      width: pxToDp_W(80),
      height: pxToDp_H(40),
      backgroundColor: "#FFFFFF",
      borderRadius: 8,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },

  // 下拉框 效果
  select_Box: 
  {
      width: pxToDp_W(80),
      height:pxToDp_H(260),
  },

  // 文字效果
  textSet:
  {
      fontSize: 12,
      color: '#000000',
      fontWeight: 'bold'
  },

  // 与月份有关的三个组件的集合
  mounth_Button:
  {
      flexDirection: 'row',
      width: pxToDp_W(160),
      height: pxToDp_H(40),
      borderRadius: 8,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      justifyContent: 'center'
  },

  // 上个月和下个月的按钮效果
  LR_Button: 
  {
      width: pxToDp_W(30),
      height: pxToDp_H(40),
      backgroundColor: '#A0A0A0',
      borderRadius: 8,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10,
      justifyContent: 'center',
      alignContent: 'center'
  },

  // 返回今天按钮效果
  today_Button: 
  {
      width: pxToDp_W(40),
      height: pxToDp_H(40),
      backgroundColor: '#A0A0A0',
      borderRadius: 8,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10,
      justifyContent: 'center',
      alignContent: 'center'
  }



})

const {width, height, scale} = Dimensions.get("window")