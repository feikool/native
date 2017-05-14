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
    getInitialState(){
      // 设置可变的和初始值
        return{
            // 当前页码
            currentPage:0,
        };
    },
    mixins:[TimeMixin],
    getDefaultProps(){ // 设置固定值
        return{
            time:1000
        }
    },
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
        let style;
        for(let i =0; i<imgs.length;i++){
            style=(i==this.state.currentPage)?{color:'blue'}:{color:'#fff'};
            IndicatorArr.push(
                <Text key={i} style={[{fontSize:30},{marginLeft:8},style]}>&bull;</Text>);
        }
        return IndicatorArr;
    },
    // 当一帧滚动结束的时候调用
    onScrollAnimationEnd(e){
    // 求水平方向的偏移量
        let offsetX = Math.round(e.nativeEvent.contentOffset.x);
        // 求出当前页数
        let currentPage = Math.floor(offsetX/Math.round(width));
        // 更新状态
        this.setState({currentPage:currentPage});
    },
    // 实现复杂操作的生命周期
    componentDidMount(){
        //开启定时器
        this.startTime();
    },
    startTime(){
      // 设置定时器
      //   1 拿到scrollView
        let scrollView = this.refs.scrollView;
        let activePage=0;
        this.timer = this.setInterval(()=>{
            let imgs = ImgData.data.length;
            //做边界判断
           if(this.state.currentPage+1 >= imgs){
               activePage=0;
           }else{
               activePage=this.state.currentPage+1;
           }
           // 更新状态state
            this.setState({currentPage:activePage});
           //让图片也滚动起来
            let offsetX = activePage * width;
            // 操作原声DOM的x值
            scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});
        },this.props.time);
    },
    // 开始拖拽  停止定时器
    onScrollBeginDrag(){
        this.clearInterval(this.timer);
    },
    // 停止拖拽 开启定时器
    onScrollEndDrag(){
        this.startTime();
    },
    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                 ref="scrollView"
                horizontal={true}  //设置为横向滚动
                showsHorizontalScrollIndicator={false}  //隐藏滚动条
                pagingEnabled={true}  //自动分页
                onMomentumScrollEnd={this.onScrollAnimationEnd}  // 当一帧滚动结束时调用函数
                onScrollBeginDrag={this.onScrollBeginDrag} //开始拖拽
                onScrollEndDrag={this.onScrollEndDrag}
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
        bottom:0,
        flexDirection:'row',
        alignItems:'center'
    }
});
module.exports = FScrollViewDemo;