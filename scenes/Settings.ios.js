import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LoginButton } from '../components';

export function Settings() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>this is settings page for IOS.</Text>
            <LoginButton />
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
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#00f',
    }
})