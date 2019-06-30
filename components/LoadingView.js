import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


export function LoadingView() {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="blue" />
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