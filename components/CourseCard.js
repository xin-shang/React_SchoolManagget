import React, { Component, useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class CourseCard extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    
    return(
      <View style={{
        marginTop: 5
      }}>
      
        <View style={{
          flexDirection: "row",
          height: 50,
          width: "100%"
          }}>
            <View style={{
              backgroundColor: "#fff",
              flex: 7.5,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10
            }}>
              <View style={{paddingLeft: 3, paddingTop: 3}}>
                <Text>{ this.props.title }</Text>
              </View>
              <View style={{paddingLeft: 3}}>
                <Text>{ this.props.body }</Text>
              </View>
            </View>
            <View style={{
              backgroundColor: "red",
              flex: 1.5
            }}>
              <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
                <Text>{ this.props.day }</Text>
              </View>
              <View style={{alignItems: "center", flex: 1}}>
                <Text>{ this.props.month }</Text>
              </View>
            </View>
            <View style={{
              backgroundColor: "orange",
              flex: 1,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10
            }}>
              <Text>Add CheckBox Here</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  collapseheading: {
    
  },
});

CourseCard.propTypes = { title: PropTypes.string.isRequired, body: PropTypes.string.isRequired, day: PropTypes.string.isRequired, month: PropTypes.string.isRequired, time: PropTypes.string.isRequired };