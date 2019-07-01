import React from 'react';
import { View, Text, TouchableHighlight, Platform, StyleSheet, AlertIOS, ToastAndroid } from 'react-native';

export function LoginButton() {

    const handlePress = () => {
        if (Platform.OS === 'ios') {
            AlertIOS.alert(
                '温馨恭喜提示',
                '登录成功'
               );
        } else {
            ToastAndroid.show("登录成功", ToastAndroid.SHORT);
        }
    };

    return (
        <TouchableHighlight onPress={handlePress}>
            <Text style={styles.button}>
                登录
            </Text>
        </TouchableHighlight>
    );
}

const styles = {
    button: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        paddingTop: 5,
        paddingRight: 20,
        paddingBottom: 5,
        paddingLeft: 20,
        borderRadius: 5,
    }
};