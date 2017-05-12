/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,View,Text
} from 'react-native';
import Login from './components/login';
// 导入json数据
export default class Template extends Component {
  render() {
    return (
        <View><Login/></View>
    );
  }
}
AppRegistry.registerComponent('Template', () => Template);
