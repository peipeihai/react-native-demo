import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, StatusBar } from 'react-native';

export function News(props) {

    console.log('==================', props);

    return (
        <View style={styles.container}>
            <Text>this is home page.</Text>
            <TouchableHighlight onPress={() => props.navigation.push('NewsDetail')}>
                <View style={styles.button}>
                    <Text>goto detail page</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingTop: 5,
        paddingBottom: 5, 
        paddingLeft: 10,
        paddingRight: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 3,
    }
})