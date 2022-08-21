import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import honda from '../img/honda.png'
import pin from '../img/pin.png'

export default function Car(props) {
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <Image source={honda} style={styles.image} />
            <Text style={styles.header}>{props.name} {props.model}</Text>
            <View style={{ marginTop: 5, marginLeft: 3 }}>
                <Text style={styles.text}>Available from: {props.time} today</Text>
                <Text style={styles.text}>${props.price}/hour</Text>
                <View style={styles.row}>
                    <Image style={styles.icon} source={pin} /> 
                    <Text style={styles.user}>{props.date}</Text>
                </View>
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
        marginTop: 30,
        borderRadius: 10,
        padding: 12,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
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
    icon: {
        width: 9,
        height: 9,
        fill: '#8C8C8C',
        marginRight: 1.5
    },
    user: {
        fontSize: 12,
        color: '#8C8C8C'
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