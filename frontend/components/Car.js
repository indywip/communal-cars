import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import honda from '../img/honda.png'

export default function Car(props) {
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <Image source={honda} style={styles.image} />
            <Text style={styles.header}>{props.name}{props.model}</Text>
            <View style={{ marginTop: 5, marginLeft: 3 }}>
                <Text style={styles.text}>Available from: {props.time}</Text>
                <Text style={styles.text}>${props.price}</Text>
                <Text style={styles.user}>Posted by {props.user}</Text>
            </View>
            <Pressable style={styles.button}
            onPress={() => navigation.navigate('Rent')}>
                <Text style={styles.buttontext}>Rent Now</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 160,
        marginLeft: 20, 
        marginTop: 30,
        borderRadius: 10,
        padding: 12
    },
    image: {
        width: 135,
        height: 90
    },
    header: {
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 3
    },
    text: {
        fontSize: 12
    },
    user: {
        fontSize: 12,
        color: '#9B9B9B',
        marginTop: 5
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        width: 85,
        borderRadius: 10,
        backgroundColor: 'black',
        marginTop: 40,
        alignSelf: 'flex-end',
        marginTop: 10
    },
    buttontext: {
        color: 'white',
        fontSize: 14
    }
})