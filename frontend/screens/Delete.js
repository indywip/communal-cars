import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer'
import honda from '../img/honda.png';

export default function Delete(props) {
    const navigation = useNavigation();

    const [text, onChangeText] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>Vehicle ‘Honda A5’ has been successfully removed from your profile.</Text>
                <Image source={honda} style={styles.image} />
                <Text style={styles.subtext}>We hope 'Honda A5' enjoyed their stay at APPNAME!</Text>
                <Pressable style={styles.button}
                    onPress={() => navigation.navigate('AddCar')}>
                    <Text style={styles.buttontext}>Add a New Vehicle</Text>
                </Pressable>
                <Pressable style={styles.button}
                    onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.buttontext}>Return to Profile</Text>
                </Pressable>
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
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        padding: 35
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: 'black',
        marginTop: 70,
        padding: 40
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    image: {
        width: 305,
        height: 140,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        width: 180,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20
    },
    buttontext: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
    }
})