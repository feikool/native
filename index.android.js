/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,View
} from 'react-native';
import LoginView from './components/login';
// 导入json数据
export default class Template extends Component {
  render() {
    return (
        <View> <LoginView /></View>
    );
  }
}
AppRegistry.registerComponent('Template', () => Template);
