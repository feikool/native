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
  View
} from 'react-native';
const Dimensions = require('Dimensions');
export default class Template extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         当前屏幕宽度：{Dimensions.get('window').width}
        </Text>
        <Text style={styles.welcome}>
          高度：{Dimensions.get('window').height}
        </Text>
        <Text style={styles.welcome}>
          分辨率：{Dimensions.get('window').scale}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Template', () => Template);
