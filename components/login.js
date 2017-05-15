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






const sData = require('../shareData.json');
const ListViewDemo = React.createClass({
    getInitialState(){
        // 设置一些初始值 可以变化的
        // 什么状态下创建一个数据源
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        return{
            dataSource:ds.cloneWithRows(sData.data)
        }
    },
    getDefaultProps(){
      // 设置默认值 不可变化的

    },
    renderRow(rowData){ //把当前的数据传入
        return(
            <TouchableOpacity activeOpacity={.5}>
                <View style={styles.innerStyle}>
                    <Image source={{uri:rowData.icon}} style={styles.iconStyle}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    },
    render(){
        return(<ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            contentContainerStyle={styles.ListStyle}
        />)
    }
});
const cols = 3;
const {width} = require('Dimensions').get('window');
const cellWh = 100;
const vMargin = (width - cellWh*cols)/cols;
const hMargin = 25;

const styles = StyleSheet.create({
    iconStyle:{
        width:80,
        height:80
    },
    ListStyle:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    innerStyle:{
        width:cellWh,
        height:cellWh,
        marginLeft:vMargin,
        marginTop:hMargin
    }
});
module.exports = ListViewDemo;