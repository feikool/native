import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Alert,
    Text,
    Image
} from 'react-native';
// 引入计时器
const TimeMixin = require('react-timer-mixin');
// 引入json数据
const ImgData = require('../BadgeData.json');
// 获取屏幕宽度
const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');
let FScrollViewDemo = React.createClass({
    mixins:[TimeMixin],
    renderAllIamges(){ //轮播图
      let allIamge =[];
      let imgs = ImgData.data;
      for(let i = 0; i<imgs.length;i++){
          // 取出单独的每一个对象
        let ImgItem = imgs[i];
        console.log(ImgItem.icon);
        allIamge.push(
            <Image key={i} source={{uri:ImgItem.icon}} style={{width:width,height:160}}/>
        )
      }
      return allIamge;
    },
    renderPageCircle(){
        let IndicatorArr = [];
        let imgs = ImgData.data;
        for(let i =0; i<imgs.length;i++){
            IndicatorArr.push(
                <View>

                </View>)
        }
    },
    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                horizontal={true}  //设置为横向滚动
                showsHorizontalScrollIndicator={false}  //隐藏滚动条
                pagingEnabled={true}  //自动分页
                >
                    {this.renderAllIamges()}
                </ScrollView>
                {/*焦点按钮*/}
                <View style={styles.pageViewStyle}>
                    {this.renderPageCircle()}
                </View>
            </View>
        )
    }
});
const styles = StyleSheet.create({
    container:{

    },
    pageViewStyle:{
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,.4)',

        // 定位
        position:'absolute',
        bottom:0
    }
});
module.exports = FScrollViewDemo;