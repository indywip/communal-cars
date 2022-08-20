import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';

import Footer from '../components/Footer'
import honda from '../img/honda.png';
import pin from '../img/pin.png'
import send from '../img/send.png'

export default function Confirmed(props) {

    const [text, onChangeText] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.subtext}>Confirmed!</Text>
                <Image source={honda} style={styles.image} />
                <View style={styles.padding}>
                    <Text style={styles.medtext}>Your {props.name}Honda A5 rental from {props.time}12pm - 5pm is confirmed! Pick up the vehicle at:</Text>
                </View>
                <View style={styles.row}>
                    <Image source={pin} style={styles.icon} />
                    <Text style={styles.smalltext}>{props.address}1234 West Street, Vancouver, BC V6T1Z4</Text>
                </View>
                <Text style={styles.sub2}>Any concerns?</Text>
                <Text style={styles.message}>Send the owner a message:</Text>
                <View style={styles.box}>
                    <TextInput
                        style={styles.input} 
                        onChangeText={(value) => onChangeText(value)}
                        value={text}
                        placeholder='Message...'
                    />
                    <TouchableOpacity>
                        <Image source={send} style={styles.send} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    padding: {
        paddingLeft: 8,
        paddingRight: 8
    },
    subtext: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 80
    },
    sub2: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 30
    },
    medtext: {
        fontSize: 26,
        fontWeight: '600',
        textAlign: 'center'
    },
    smalltext: {
        fontSize: 17,
        fontWeight: '600'
    },
    message: {
        fontSize: 17,
        fontWeight: '600',
        marginLeft: 25,
        marginTop: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 3
    },
    box: {
        backgroundColor: '#D97777',
        borderRadius: 10,
        width: 340,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 8,
        marginTop: 12
    },
    image: {
        width: 305,
        height: 201,
        alignSelf: 'center'
    },
    input: {
        height: 40,
        marginLeft: 3,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        width: 265
    },
    send: {
        width: 45,
        height: 45
    }
})