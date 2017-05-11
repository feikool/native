/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image,TextInput
} from 'react-native';
const Dimensions = require('Dimensions');

// 导入json数据
const BadgeData = require('./BadgeData.json');
export default class Template extends Component {
  render() {
    return (
      <View>
          <TextInput style={styles.inputStyle} keyboardType={'phone-pad'}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    inputStyle:{
        width:300,
        height:60,
        borderWidth:1,
        borderColor:'#e8e8e8',
    }
});

AppRegistry.registerComponent('Template', () => Template);
