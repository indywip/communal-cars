import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
import axios from 'axios';

import Footer from '../components/Footer'
import Car from '../components/Car'
import small from '../img/logo-small.png'

export default function Home(props) {
    
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setErrorFlag] = useState(false);

    const ip = '192.168.0.101';

    const fetchCars = async () => {
        console.log('fetching cars');
          setIsLoading(true);
          const response = await axios.get(`http://${ip}:3000/api/vehicles/get-vehicles`)
          .then(result => {
            console.log('result',result.data);
            setCars(result.data??[]);
          }).catch(err => {
            console.log('get err',err);
          })

            setIsLoading(false);
            return;
      };

    useEffect(() => {
            console.log('use effect working');
          fetchCars();
          //return () => source.cancel("Data fetching cancelled");
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.top}>
                    <Image source={small} style={styles.image} />
                    <Text style={styles.header}>CommunalCars</Text>
                </View>
                <SearchBar style={{ marginTop: 15 }}
                fontColor='#A6A6A6'
                iconColor='#A6A6A6'
                placeholder="Search"
                //onPress={() => alert("onPress")}
                // onChangeText={(text) => filterList(text)}
                // onClearPress={() => filterList("")}
                />
                <View style={styles.row}> 
                    {cars.map((list, index) => (
                        <Car key={index} name={list.brand} model={list.model} time={list.availability} date={list.location} rate={list.rate} vehicleId={list._id} />
                    ))}
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
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 20,
        marginBottom: 40
    }
})