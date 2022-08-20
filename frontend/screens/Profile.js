import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer'
import RegCar from '../components/RegisteredCar'
import RenCar from '../components/RentedCar'
import ProfilePic from '../img/User.png'

export default function Profile() {

    const navigation = useNavigation();

    // const name;
    // const location;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 0 }}>
                        <Image source={ProfilePic} style={styles.image} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.header}>John Smith</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.text}>Toronto, CA</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subHeading}>Registered Vehicles</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <RegCar />
                    </View>
                    <View style={{ flex: 1.15 }}>
                        <RegCar />
                    </View>
                </View>
                <Text style={styles.subHeading}>Rented Vehicles</Text>
                    <View>
                        <RenCar />
                    </View>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        fontSize: 30,
        fontWeight: '700',
        color: 'black',
        marginTop: 20
    },
    subHeading: {
        fontSize: 15,
        fontWeight: '700',
        color: 'black',
        paddingTop: 20,
        paddingLeft: 25
    },
    text: {
        fontSize: 15,
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20
    },
    image: {
        width: 55,
        height: 55,
        marginRight: 10,
        marginLeft: 20,
        marginTop: 25
    },
})


