import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,  //点击效果
    Alert
} from 'react-native';

const Data = require('../shareData.json');
const ListViewDemo = React.createClass({
    getInitialState(){
        // 设置一些初始值 可以变化的
        // 什么状态下创建一个数据源
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        return{
            dataSource:ds.cloneWithRows(Data.data);
        }
    },
    getDefaultProps(){
      // 设置默认值 不可变化的

    },
    render(){
        return(<View></View>)
    }
});

const styles = StyleSheet.create({
    cellViewStyle:{
        backgroundColor:'#e8e8e8'
    },
    leftImageStyle:{
        width:60,
        height:60
    },
    topTitleStyle:{

    },
    bottomTitleStyle:{

    }
});
module.exports = ListViewDemo;