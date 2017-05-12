import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Logino extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity activeOpacity={.5}>
                <Text>可以点击的文本</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({

});
