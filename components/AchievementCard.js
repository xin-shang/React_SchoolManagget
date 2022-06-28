import React, { Component, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';

export default class AchiecvementCard extends Component {
  
    constructor(props) {
      super(props);
    }
  
    render() {
      
      return(
        <Avatar.Icon style={styles.achievementIcon} size={100} icon={this.props.icon} backgroundColor={this.props.color}/>
      );
    }
  }
  
  const styles = StyleSheet.create({
    achievementIcon: {
      borderRadius: 10,
    },
   });
  
  AchiecvementCard.propTypes = { icon: PropTypes.string.isRequired, color: PropTypes.string.isRequired };