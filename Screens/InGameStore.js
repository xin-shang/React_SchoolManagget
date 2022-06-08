// 
import * as React from "react";

// 
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { Button, Card } from 'react-native-paper';

//
import { pxToDp, pxToDp_H, pxToDp_W } from '../tools/PixelTransform';
// import Img_Favourite from '../res/Favorite.png';
// import Img_Bill from '../res/Bill.png'
// import Img_Car from '../res/Car.png'


// 
function InGameStore () {
    return (
      <>
      <ScrollView>
      {/* part1 My points (Coins)    Favorite item    bill   shopping cart */}
      <View style = {styles.box_Part1}>
        
        {/* Number of Coins */}
        <Text style = {styles.text_1}>My Coins: 0000</Text>
        
        <View style = {styles.button_together}>

          {/* Favourite Item */}
          <TouchableOpacity style = {styles.button_img}>
            <Image source={require("../res/Favourite.png")} style = {styles.img}></Image>
          </TouchableOpacity>

          {/* Bill */}
          <TouchableOpacity style = {styles.button_img}>
            <Image source={require("../res/Bill.png")} style = {styles.img}></Image>
          </TouchableOpacity>

          {/* Shopping Car */}
          <TouchableOpacity style = {styles.button_img}>
            <Image source={require("../res/Car.png")} style = {styles.img}></Image>
          </TouchableOpacity>

        </View>

      </View>
      {/* part1 End */}

      <View style = {styles.line_1}></View>

      {/* part2 Search Item */}
      <View style = {styles.box_Part1}>

        {/* Input Item you want */}
        <TextInput style = {styles.text_Input} placeholder = 'Input item you want' placeholderTextColor = {'#C0C0C0'}></TextInput>

        {/* Button of Find */}
        <TouchableOpacity style = {styles.button_Find}>
          <Text style = {styles.text_2}>Find</Text>
        </TouchableOpacity>

      </View>
      {/* part2 End */}

      <View style = {styles.line_1}></View>

      {/* part3 Item Type */}

      {/* part3 End */}

      {/* part4 Item Show */}
      <ScrollView>
        
        {/* Item 1 */}
        <View style = {styles.box_Part2}>

          {/* Item images */}
          <View style = {styles.box_LItem}>
            <Image source={require("../res/pictureFrame_1.png")} style = {styles.show_Item}></Image>
          </View>
          
          {/* Item Introduction */}
          <View style = {styles.box_RItem}>

            {/* Item Name */}
            <Text style = {styles.text_3}>Item Name: High-level Profile Photo</Text>
            <Text style = {styles.text_4}>Item Introduce: Make your Profile Photo look better.</Text>
            <Text style = {styles.text_5}>Type: Account     Price: 800</Text>

            {/* Button of Buy Item */}
            <TouchableOpacity style = {styles.button_Buy}>
              <Text style = {styles.text_2}>Buy Now</Text>
            </TouchableOpacity>

          </View>

        </View>

        

        {/* Item 2 */}
        <View style = {styles.box_Part2}>

          {/* Item images */}
          <View style = {styles.box_LItem}>
            <Image source={require("../res/pictureFrame_2.jpeg")} style = {styles.show_Item}></Image>
          </View>
          
          {/* Item Introduction */}
          <View style = {styles.box_RItem}>

            {/* Item Name */}
            <Text style = {styles.text_3}>Item Name: High-level Profile Photo</Text>
            <Text style = {styles.text_4}>Item Introduce: Make your Profile Photo look better.</Text>
            <Text style = {styles.text_5}>Type: Account     Price: 800</Text>

            {/* Button of Buy Item */}
            <TouchableOpacity style = {styles.button_Buy}>
              <Text style = {styles.text_2}>Buy Now</Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Item 3 */}
        <View style = {styles.box_Part2}>

          {/* Item images */}
          <View style = {styles.box_LItem}>
            <Image source={require("../res/ReName.png")} style = {styles.show_Item}></Image>
          </View>
          
          {/* Item Introduction */}
          <View style = {styles.box_RItem}>

            {/* Item Name */}
            <Text style = {styles.text_3}>Item Name: Re-Name Card</Text>
            <Text style = {styles.text_4}>Item Introduce: Have a chance to change the user name.</Text>
            <Text style = {styles.text_5}>Type: Account     Price: 800</Text>

            {/* Button of Buy Item */}
            <TouchableOpacity style = {styles.button_Buy}>
              <Text style = {styles.text_2}>Buy Now</Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Item 4 */}
        <View style = {styles.box_Part2}>

          {/* Item images */}
          <View style = {styles.box_LItem}>
            <Image source={require("../res/eBook.png")} style = {styles.show_Item}></Image>
          </View>
          
          {/* Item Introduction */}
          <View style = {styles.box_RItem}>

            {/* Item Name */}
            <Text style = {styles.text_3}>Item Name: Java eBook</Text>
            <Text style = {styles.text_4}>Item Introduce: basic knowledge of the Java programming languages.</Text>
            <Text style = {styles.text_5}>Type: Book     Price: 800</Text>

            {/* Button of Buy Item */}
            <TouchableOpacity style = {styles.button_Buy}>
              <Text style = {styles.text_2}>Buy Now</Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Item 5 */}
        <View style = {styles.box_Part2}>

          {/* Item images */}
          <View style = {styles.box_LItem}>
            <Image source={require("../res/eBook.png")} style = {styles.show_Item}></Image>
          </View>
          
          {/* Item Introduction */}
          <View style = {styles.box_RItem}>

            {/* Item Name */}
            <Text style = {styles.text_3}>Item Name:Python eBook</Text>
            <Text style = {styles.text_4}>Item Introduce: basic knowledge of the Python programming languages.</Text>
            <Text style = {styles.text_5}>Type: Book     Price: 800</Text>

            {/* Button of Buy Item */}
            <TouchableOpacity style = {styles.button_Buy}>
              <Text style = {styles.text_2}>Buy Now</Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Item 6 */}
        <View style = {styles.box_Part2}>

          {/* Item images */}
          <View style = {styles.box_LItem}>
            <Image source={require("../res/eBook.png")} style = {styles.show_Item}></Image>
          </View>
          
          {/* Item Introduction */}
          <View style = {styles.box_RItem}>

            {/* Item Name */}
            <Text style = {styles.text_3}>Item Name: C++ eBook</Text>
            <Text style = {styles.text_4}>Item Introduce: basic knowledge of the C++ programming languages.</Text>
            <Text style = {styles.text_5}>Type: Book     Price: 800</Text>

            {/* Button of Buy Item */}
            <TouchableOpacity style = {styles.button_Buy}>
              <Text style = {styles.text_2}>Buy Now</Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Item 7 */}
        <View style = {styles.box_Part2}>

          {/* Item images */}
          <View style = {styles.box_LItem}>
            <Image source={require("../res/eBook.png")} style = {styles.show_Item}></Image>
          </View>
          
          {/* Item Introduction */}
          <View style = {styles.box_RItem}>

            {/* Item Name */}
            <Text style = {styles.text_3}>Item Name: Web Develop eBook</Text>
            <Text style = {styles.text_4}>Item Introduce: Item Introduce: basic knowledge of the Web Develop programming languages. Including: HTML, CSS, JavaScript, jQuery, PHP.</Text>
            <Text style = {styles.text_5}>Type: Book     Price: 800</Text>

            {/* Button of Buy Item */}
            <TouchableOpacity style = {styles.button_Buy}>
              <Text style = {styles.text_2}>Buy Now</Text>
            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>
      {/* part4 End */}

      </ScrollView>
      </>
      
    );
}

export default InGameStore;


const styles = StyleSheet.create({
  box_Part1: 
  {
    display: 'flex',
    flexDirection: 'row',
    width: pxToDp_W(390),
    height: pxToDp_H(50),
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around'
  },

  text_1:
  {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10,
  },

  line_1: 
  {
      width: '98%',
      height: 1,
      backgroundColor: "#808080",
      marginLeft: 'auto',
      marginRight: 'auto',
  },

  img: 
  {
    width: pxToDp_W(30),
    height: pxToDp_H(30),
  },

  button_together:
  {
      flexDirection: 'row',
      width: pxToDp_W(120),
      height: pxToDp_H(50),
      borderRadius: 8,
      marginRight: 10,
      marginTop: 0,
      justifyContent: 'center'
  },

  button_img: 
  {
      width: pxToDp_W(30),
      height: pxToDp_H(30),
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10,
      justifyContent: 'center',
      alignContent: 'center'
  },

  text_Input:
  {
    width: pxToDp_W(280),
    height: pxToDp_H(30),
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#000090',
    marginTop: 10,
    marginLeft: 15,
    justifyContent: 'center',
  },

  button_Find:
  {
    width: pxToDp_W(60),
    height: pxToDp_H(30),
    borderRadius: 25,
    backgroundColor: '#000090',
    marginTop: 10,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text_2: 
  {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  box_Part2:
  {
    display: 'flex',
    flexDirection: 'row',
    width: pxToDp_W(390),
    height: pxToDp_H(180),
    backgroundColor: "#87cefa",
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
    justifyContent: 'space-around'
  },

  box_LItem:
  {
    width: pxToDp_W(120),
    height: pxToDp_H(170),
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },

  box_RItem: 
  {
    width: pxToDp_W(260),
    height: pxToDp_H(170),
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },

  show_Item:
  {
    width: pxToDp_W(120),
    height: pxToDp_H(170),
    borderRadius: 8,
  },

  text_3:
  {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },

  text_4:
  {
    fontSize: 12,
    color: '#000000',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },

  text_5:
  {
    fontSize: 14,
    color: '#FF0000',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  button_Buy:
  {
    width: pxToDp_W(80),
    height: pxToDp_H(30),
    borderRadius: 25,
    backgroundColor: '#FF9912',
    marginTop: 30,
    marginLeft:160,
    justifyContent: 'center',
    alignItems: 'center',
  },

})