import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function Settings() {
    return (
        <View style={styles.container}>
            <Text>this is settings page.</Text>
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
})