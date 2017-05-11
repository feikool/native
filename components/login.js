import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image,TextInput
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View>
                <Text style={styles.loginS}>登录哇</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loginS:{
        width:80,
        height:80,
        backgroundColor:'red'
    }
});
