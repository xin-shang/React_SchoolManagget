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
import {Table, TableWrapper,Row, Rows} from "react-native-table-component";

// 
function Calendar () {
    return (
      <>
      <ScrollView>
        
        {/*The top half of the calendar, calendar subject.*/}
        <View style = {styles.box_TopScreen}>
          
          {/*Select year, select month, return to today*/}
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
              -- ModalDropdown       onDropdownWillShow={() => {this.setState({typeShow:true})}}      
              -- ModalDropdown       onDropdownWillHide={() => this.setState({typeShow:false})}    
              -- ModalDropdown       onSelect={this._selectType}    

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

          {/*Date body, horizontal 5 vertical 7*/}
          <View style = {styles.box_DateBody}>

            <Table style = {styles.box_Week}>
              <Row 
                data = {DateArr.tableHade}
                flexArr = {[1, 1, 1, 1, 1, 1, 1]}
                textStyle = {styles.text_1}
              >
              </Row>
            </Table>

            <TableWrapper style = {styles.box_Date}>
              <Rows 
                data={DateArr.tableData}
                style={styles.row}
                textStyle = {styles.text_2}
              > 
              </Rows>
            </TableWrapper>


          </View>
          {/*END*/}

        </View>
        {/*END*/}

        <View style = {styles.line_2}></View>

        {/*The lower half of the calendar, Details of the selected day.*/}
        <View style = {styles.box_LowerScreen}>
          <Text style = {styles.text_3}>01 Jun 2022   Wednesday</Text>
          <Text style = {styles.text_4}>Task 1:</Text>
          <Text style = {styles.text_5}>- One hour of reading time</Text>
          <Text style = {styles.text_4}>Task 2:</Text>
          <Text style = {styles.text_5}>- Assignment 2 submission deadline</Text>



        </View>
        {/*END*/}
      </ScrollView>
      </>
    );
}

export default Calendar;




const DateArr = {
  
  tableHade:['Sun', 'Mon', 'Tues', 'Wen', 'Thur', 'Fri', 'Sat'],

  tableData:[
    // [
    //   <Button onPress={()=>Toast.info('LowerScreen')}>30</Button>,
    //   <Button onPress={()=>Toast.info('LowerScreen')}>31</Button>,
    //   <Button onPress={()=>Toast.info('LowerScreen')}>1</Button>,
    //   <Button onPress={()=>Toast.info('LowerScreen')}>2</Button>,
    //   <Button onPress={()=>Toast.info('LowerScreen')}>3</Button>,
    //   <Button onPress={()=>Toast.info('LowerScreen')}>4</Button>,
    //   <Button onPress={()=>Toast.info('LowerScreen')}>5</Button>

    // ],
 
    // [
    //   <TouchableOpacity width='pxToDp_W(55)' height='pxToDp_H(100)' backgroundColor='#87cefa' borderRadius='8' justifyContent='center' alignContent='center'><Text textAlign='center' fontSize='18' fontWeight='bold'>6</Text></TouchableOpacity>,
    //   <TouchableOpacity width='pxToDp_W(55)' height='pxToDp_H(100)' backgroundColor='#87cefa' borderRadius='8' justifyContent='center' alignContent='center'><Text textAlign='center' fontSize='18' fontWeight='bold'>7</Text></TouchableOpacity>,
    //   <TouchableOpacity width='pxToDp_W(55)' height='pxToDp_H(100)' backgroundColor='#87cefa' borderRadius='8' justifyContent='center' alignContent='center'><Text textAlign='center' fontSize='18' fontWeight='bold'>8</Text></TouchableOpacity>,
    //   <TouchableOpacity width='pxToDp_W(55)' height='pxToDp_H(100)' backgroundColor='#87cefa' borderRadius='8' justifyContent='center' alignContent='center'><Text textAlign='center' fontSize='18' fontWeight='bold'>9</Text></TouchableOpacity>,
    //   <TouchableOpacity width='pxToDp_W(55)' height='pxToDp_H(100)' backgroundColor='#87cefa' borderRadius='8' justifyContent='center' alignContent='center'><Text textAlign='center' fontSize='18' fontWeight='bold'>10</Text></TouchableOpacity>,
    //   <TouchableOpacity width='pxToDp_W(55)' height='pxToDp_H(100)' backgroundColor='#87cefa' borderRadius='8' justifyContent='center' alignContent='center'><Text textAlign='center' fontSize='18' fontWeight='bold'>11</Text></TouchableOpacity>,
    //   <TouchableOpacity width='pxToDp_W(55)' height='pxToDp_H(100)' backgroundColor='#87cefa' borderRadius='8' justifyContent='center' alignContent='center'><Text textAlign='center' fontSize='18' fontWeight='bold'>12</Text></TouchableOpacity>,
    // ],
    ['30','31','1','2','3','4','5'],
    ['6','7','8','9','10','11','12'],
    ['13','14','15','16','17','18','19'],
    ['20','21','22','23','24','25','26'],
    ['27','28','29','30','1','2','3'],
    
  ]

};


function elementButton () {
  <TouchableOpacity style={styles.days_Button}>
    <Text style={styles.text}>1</Text>
  </TouchableOpacity>
}

const ElementButton = elementButton;


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
      // The school emblem's blue
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

  // Drop down selection box effect
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

  // Drop down box effect
  select_Box: 
  {
      width: pxToDp_W(80),
      height:pxToDp_H(260),
  },

  // Text Effects
  textSet:
  {
      fontSize: 12,
      color: '#000000',
      fontWeight: 'bold'
  },

  // A collection of three components associated with the month
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

  // Last month and next month's button effect
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
  },

  box_Week:
  {
    width: pxToDp_W(385),
    height: pxToDp_H(60),
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    backgroundColor: '#A0A0A0'
  },

  text_1: 
  { 
    textAlign: 'center',
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold'
  },

  text_2: 
  { 
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold'
  },

  box_Date: 
  {
    width: pxToDp_W(385),
    height: pxToDp_H(500),
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    backgroundColor: '#87cefa',
  },

  days_Button: 
  {
    width: pxToDp_W(55),
    height: pxToDp_H(100),
    backgroundColor: '#87cefa',
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignContent: 'center'
  },

  row: 
  {
    height: pxToDp_H(100),
    borderTopWidth: 1/3,
    borderBottomWidth: 1/3,
  },

  text_3:
  {
    textAlign: 'center',
    fontSize: 26,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 20,
  },

  text_4:
  {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
  },

  text_5:
  {
    fontSize: 18,
    color: '#000000',
    marginTop: 20,
    marginLeft: 40,
  }
})
