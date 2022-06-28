import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Importing prop types to allow the definition of prop values
import PropTypes from 'prop-types';

export default class CourseCard extends Component {
  // Setting up props
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{
        marginTop: 5,
        marginLeft: 5,
        width: 300
      }}>
      
        <View style={{
          flexDirection: "row",
          height: 110
          }}>
            <View style={{
              backgroundColor: "#fff",
              flex: 7.5,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10
            }}>
              {/* Title of course card */}
              <View style={{paddingLeft: 3, paddingTop: 3}}>
                <Text style={styles.datefont}>{ this.props.title }</Text>
              </View>
              {/* Max 300 characters for a body description */}
              <View style={{paddingLeft: 3}}>
                <Text>{ this.props.body }</Text>
              </View>
            </View>
            <View style={{
              backgroundColor: "#edf1f9",
              flex: 1
            }}>
              {/* Day on course card */}
              <View style={{alignItems: "center", justifyContent: "flex-end", flex: 1}}>
                <Text style={styles.datefont}>{ this.props.day }</Text>
              </View>
              {/* Month on course card */}
              <View style={{alignItems: "center", justifyContent: "flex-start", flex: 1}}>
                <Text style={styles.datefont}>{ this.props.month }</Text>
              </View>
            </View>
            {/* View and styling for checkmark */}
            <View style={{
              backgroundColor: "#edf1f9",
              flex: .5,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
              alignItems: "flex-start",
              justifyContent: "center"
            }}>
              <Text style={styles.datefont}>✓</Text>
            </View>
          </View>
      </View>
    );
  }
}

// Definition of stylesheet
const styles = StyleSheet.create({
  datefont: {
    fontWeight: "bold",
    fontSize: 20,
  },
 });

// Definition of the props used in the card. Variables that are passed in from outside of class
CourseCard.propTypes = { title: PropTypes.string.isRequired, body: PropTypes.string.isRequired, day: PropTypes.string.isRequired, month: PropTypes.string.isRequired, time: PropTypes.string.isRequired };