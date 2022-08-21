import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Pressable, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import honda from '../img/honda.png'

export default function EditCar() {

    const navigation = useNavigation();
    const [brand, onChangeBrand] = useState("");
    const [model, onChangeModel] = useState("");
    const [notes, onChangeNotes] = useState("");
    const [rate, onChangeRate] = useState("");
    const [avail, onChangeAvail] = useState("");
    const [address, onChangeAddress] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.subtext}>Edit Vehicle Rates & Availability</Text>
                <Text style={styles.header}>Honda A5</Text>
                <Image source={honda} style={styles.image} />
                <View>
                    <View>
                        <Text style={styles.text}>Brand</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Honda'
                            onChangeText={(value) => onChangeBrand(value)}
                            value={brand}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Model</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='A5'
                            onChangeText={(value) => onChangeModel(value)}
                            value={model}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Rate</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='$75/hour'
                            onChangeText={(value) => onChangeRate(value)}
                            value={rate}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Availability</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='12pm - 5pm'
                            onChangeText={(value) => onChangeAvail(value)}
                            value={avail}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='1234 Main Street, Vancouver, BC V6T1Z4'
                            onChangeText={(value) => onChangeAddress(value)}
                            value={address}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Notes</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='This car has 4 seats. Renting it out at work'
                            onChangeText={(value) => onChangeNotes(value)}
                            value={notes}
                        />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.text}>Sensitive Acton</Text>
                        <Pressable style={styles.longbutton}
                            onPress={() => navigation.navigate('Delete')}>
                            <Text style={styles.longbuttontext}>DELETE VEHICLE</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 50 }}>
                        <Pressable style={styles.button}
                            onPress={() => navigation.navigate('Profile')}>
                            <Text style={styles.buttontext}>EXIT</Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 50}}>
                        <Pressable style={styles.button}
                            onPress={() => navigation.navigate('Profile')}>
                            <Text style={styles.buttontext}>SAVE</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        paddingLeft: 300,
        width: 305,
        height: 201,
        marginTop: 20,
        alignSelf: 'center'
    },
    container: {
        flex: 1
    },
    body: {
        marginLeft: 24
    },
    subtext: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 50
    },
    text: {
        marginLeft: 26,
        fontSize: 16,
        marginTop: 10
    },
    header: {
        fontSize: 34,
        fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        marginTop: 30,
    },
    input: {
        height: 44,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 6,
        fontSize: 15
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        width: 100,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 40
    },
    longbutton: {
        backgroundColor: '#D97777',
        padding: 10,
        width: 340,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 40
    },
    buttontext: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
    },
    longbuttontext: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center'
    }
})