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
  View, Image
} from 'react-native';
const Dimensions = require('Dimensions');

// 导入json数据
var BadgeData = require('./BadgeData.json');

export default class Template extends Component {
  render() {
    return (
      <View style={styles.container}>
          {this.renderAllBadge()}
          <Text>55555</Text>
      </View>
    );
  }
    // 返回所有的包
    renderAllBadge(){
        var allBadge =[];
    for(let i=0;i<BadgeData.length;i++){
        var badge = BadgeData.data[i];
        allBadge.push(
            <View style={styles.outViewStyle}>
                <Image source={{uri:badge.icon}} style={styles.imageStyle}/>
                <Text style={styles.textStyle}>{badge.title}</Text>
            </View>
        )
    }
        return allBadge;
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
    outViewStyle:{

    },
    textStyle:{

    }
});

AppRegistry.registerComponent('Template', () => Template);
