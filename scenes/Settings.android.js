import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { LoginButton } from '../components';

export function Settings() {

    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {counter}
            </Text>

            <TouchableHighlight  
                style={styles.button} 
                onPress={() => setCounter(counter + 1)}
            >
                <Text>increment</Text>
            </TouchableHighlight>

            <TouchableHighlight  
                style={styles.button} 
                onPress={() => setCounter(counter - 1)}
            >
                <Text>decrement</Text>
            </TouchableHighlight>

            <TouchableHighlight  
                style={styles.button} 
                onPress={() => setCounter(0)}
            >
                <Text>reset</Text>
            </TouchableHighlight>

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
        fontSize: 30,
        color: '#f00',
        marginBottom: 30,
    },
    button: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        paddingTop: 5,
        paddingRight: 20,
        paddingBottom: 5,
        paddingLeft: 20,
        borderRadius: 5,
        marginBottom: 15,
    }
})