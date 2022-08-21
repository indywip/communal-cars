import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

import Footer from '../components/Footer';
export default function AddCar() {

    const navigation = useNavigation(); 
    const [brand, onChangeBrand] = useState("");
    const [model, onChangeModel] = useState("");
    const [notes, onChangeNotes] = useState("");
    const [rate, onChangeRate] = useState("");
    const [avail, onChangeAvail] = useState("");
    const [date, onChangeDate] = useState("");
    const [address, onChangeAddress] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const ip = '192.168.0.101'

    const postCars = async () => {
        setIsLoading(true);
            const response = await axios.post(`http://${ip}:3000/api/vehicles/register-vehicle`, {
                brand,
                model,
                notes,
                rate,
                avail,
                date,
                address
            }).then(result => {
                console.log('result',result.data);
                alert(` You have created: ${JSON.stringify(result.data)}`);
                setIsLoading(false);
                onChangeBrand('');
                onChangeModel('');
                onChangeNotes('');
                onChangeRate('');
                onChangeAvail('');
                onChangeDate('');
                onChangeAddress('');
            }).catch(err => {
                console.log('err',err);
            })
        setIsLoading(false);
        }


    const checkTextInput = async (event) => {
        if (!brand.trim()) {
          alert('Please enter your car brand');
          return;
        }
        if (!model.trim()) {
          alert('Please enter your car model');
          return;
        }
        if (!rate.trim()) {
          alert('Please enter your hourly rate');
          return;
        }
        if (!avail.trim()) {
            alert('Please enter the time range your car can be rented');
            return;
        }
        if (!date.trim()) {
            alert('Please indicate what date your car can be rented');
            return;
        }
        if (!address.trim()) {
            alert('Please enter where your car will be picked up');
            return;
        }

        postCars();
        navigation.navigate('Home');
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.subtext}>Vehicle Registration</Text>
                <Text style={styles.header}>New Vehicle</Text>
                <View>
                    <Text style={styles.medtext}>Basic Information</Text>
                    <View>
                        <Text style={styles.text}>Brand <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Brand'
                            onChangeText={(value) => onChangeBrand(value)}
                            value={brand}
                        />
                    </View>
                    <View style={{ marginTop: 3 }}>
                        <Text style={styles.text}>Model <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Model'
                            onChangeText={(value) => onChangeModel(value)}
                            value={model}
                        />
                    </View>
                    <View style={{ marginTop: 3 }}>
                        <Text style={styles.text}>Notes</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='This car has 4 seats. Renting it out at work'
                            onChangeText={(value) => onChangeNotes(value)}
                            value={notes}
                        />
                    </View>
                    <Text style={styles.medtext}>Rates and Availability</Text>
                    <View>
                        <Text style={styles.text}>Rate <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            placeholder='$30/hour'
                            onChangeText={(value) => onChangeRate(value)}
                            value={rate}
                        />
                    </View>
                    <View style={{ marginTop: 3 }}>
                        <Text style={styles.text}>Availability <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            placeholder='12pm - 4pm'
                            onChangeText={(value) => onChangeAvail(value)}
                            value={avail}
                        />
                    </View>
                    <View style={{ marginTop: 3 }}>
                        <Text style={styles.text}>Date <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            placeholder='August 20, 2022'
                            onChangeText={(value) => onChangeDate(value)}
                            value={date}
                        />
                    </View>
                    <Text style={styles.medtext}>Location</Text>
                    <View>
                        <Text style={styles.text}>Address <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            placeholder='1234 Main Street, Vancouver, BC V6T1Z4'
                            onChangeText={(value) => onChangeAddress(value)}
                            value={address}
                        />
                    </View>
                </View>
                <Pressable style={styles.button} 
                    onPress={checkTextInput}>
                        <Text style={styles.buttontext}>Register</Text>
                    </Pressable>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        marginLeft: 24
    },
    subtext: {
        textTransform: 'uppercase',
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
    medtext: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 30,
        marginLeft: 25
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
        padding: 12,
        width: 200,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 40
    },
    buttontext: {
        fontSize: 34,
        fontWeight:'700',
        color: 'white',
        textAlign: 'center',     
    }
})