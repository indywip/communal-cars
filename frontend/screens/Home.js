import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";

import Footer from '../components/Footer'
import Car from '../components/Car'
import small from '../img/logo-small.png'

export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.top}>
                    <Image source={small} style={styles.image} />
                    <Text style={styles.header}>Appname</Text>
                </View>
                <SearchBar style={{ marginTop: 15 }}
                fontColor='#A6A6A6'
                iconColor='#A6A6A6'
                placeholder="Search"
                onPress={() => alert("onPress")}
                // onChangeText={(text) => filterList(text)}
                // onClearPress={() => filterList("")}
                />
                <View>
                    <Car />
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
        fontSize: 18,
        fontWeight: '700'
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20
    },
    image: {
        width: 45,
        height: 45,
        marginRight: 10
    },
})