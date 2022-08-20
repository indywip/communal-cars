import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import honda from '../img/honda.png'

export default function Car(props) {

    return (
        <View style={styles.container}>
            <Image source={honda} style={styles.image} />
            <Text style={styles.header}>{props.name} Honda A5</Text>
            <View style={{ marginTop: 5, marginLeft: 3 }}>
                <Text style={styles.text}>Available from: {props.time}12-5pm</Text>
                <Text style={styles.text}>${props.price}75/hour</Text>
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.buttontext}>Edit</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 160,
        marginLeft: 25,
        marginTop: 20,
        borderRadius: 10,
        padding: 12,
        elevation: 10
    },
    image: {
        width: 135,
        height: 90
    },
    header: {
        fontSize: 15,
        fontWeight: '600'
    },
    text: {
        fontSize: 12
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        width: 65,
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