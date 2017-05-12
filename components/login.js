import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';

export default class Logino extends Component {
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    constructor(props){
        super(props);
    }
    renderPress(str){
        Alert.alert(str);
        console.log(str)
    }
    render() {
        return (
            <View>
                <TouchableOpacity activeOpacity={.5}>
                <Text
                    onPress={()=>this.renderPress('鼠标点击')}
                    onLongPress={()=>this.renderPress('鼠标长按')}>可以点击的文本</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({

});
