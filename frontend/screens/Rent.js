import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable,SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Footer from '../components/Footer';
import honda from '../img/honda.png';

export default function Rent(props) {

    const navigation = useNavigation(); 

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.box}>
                    <Text style={styles.subtext}>Vehicle Information</Text>
                    <Text style={styles.header}>{props.name}Honda A5</Text>
                    <Image source={honda} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.medtext}>${props.price}75/hour</Text>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.notes}>Available from: {props.time}12pm - 5pm</Text>
                        <Text style={styles.notes}>Notes from owner:{'\n'}{props.time}This car has 4 seats. Hoping to rent it out while I’m at work today.</Text>
                        <Text style={styles.user}>Posted by {props.user}John Smith</Text>
                    </View>
                    <Pressable style={styles.button} 
                    onPress={() => navigation.navigate('Confirmed')}>
                        <Text style={styles.buttontext}>Rent Now</Text>
                    </Pressable>
                </View> 
            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    box: {
        backgroundColor: '#D97777',
        borderRadius: 15,
        marginTop: 0
    },
    subtext: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 80
    },
    medtext: {
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 20
    },
    header: {
        fontSize: 34,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        marginTop: 30
    },
    image: {
        width: 305,
        height: 201,
        marginTop: 10,
        alignSelf: 'center'
    },
    notes: {
        fontSize: 20,
        marginTop: 16
    },
    button: {
        backgroundColor: 'black',
        padding: 12,
        width: 200,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 25,
        elevation: 5
    },
    buttontext: {
        fontSize: 34,
        fontWeight:'700',
        color: 'white',
        textAlign: 'center',     
    },
    user: {
        fontSize: 20,
        marginTop: 16,
        color: '#9B9B9B'
    }
})