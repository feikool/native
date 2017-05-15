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
const Wine = require('../Wine.json');
const ListViewDemo = React.createClass({
   // 设置初始值
    getInitialState(){
      // 1、设置数据源
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>{
            r1!==r2;  //当两个不相等的时候更新数据源
        }});
        console.log(ds)
        // 2、设置返回数据
        return{
            dataSource:ds.cloneWithRows(Wine)
        }
    },
    // 返回具体的cell 里面自带了4个形参 一行数据  第几组数据s1  数据索引  数据回调函数
    renderRow(rowData,sectionId,rowId,highlightRow){
        return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{Alert.alert(`点击了第${rowId}行`)}}>
            <View style={styles.cellViewStyle}>
                <Image source={{uri:'z1'}} style={styles.leftImageStyle}/>
                <View style={styles.cellViewStyle}>
                    <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                    <Text style={styles.bottomTitleStyle}>{rowData.money}</Text>
                </View>
            </View>
        </TouchableOpacity>
        )
    },
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
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