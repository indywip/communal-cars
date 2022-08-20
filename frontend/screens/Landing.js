
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import logo from '../img/logo.png'

export default function Landing({ navigation }) {
  
    const [name, onChangeName] = useState("");
    const [city, onChangeCity] = useState("");
    const [isSelected, setSelection] = useState(false);
  
    const checkTextInput = () => {
      if (!name.trim() && !city.trim()) {
        alert('Please enter your name and city');
        return;
      }
      if (!city.trim() && name.trim) {
        alert('Please enter your city');
        return;
      }
      if (!name.trim() && city.trim) {
        alert('Please enter your name');
        return;
      }

      if(!isSelected) {
        alert('Please agree to our terms and conditions');
        return;
      }
 
      navigation.navigate('Home');
  };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.header}>APPNAME</Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.input} 
            onChangeText={(value) => onChangeName(value)}
            value={name}
            placeholder='John Smith'
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.text}>City</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChangeCity(value)}
            value={city}
            placeholder='Vancouver, BC'
          />
            {/* <View style={styles.auto}>
            <GooglePlacesAutocomplete
              placeholder='Vancouver, BC'
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: process.env.GOOGLE_API_KEY,
                language: 'en',
              }}
            />
          </View> */}
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={(newValue) => setSelection(newValue)}
            //color={isSelected ? '#4630EB' : undefined}
          />
          <Text style={styles.smalltext}>I agree with APPNAME’s terms and conditions</Text>
        </View>
        <View style={styles.center}>
          <Pressable style={styles.button} 
          onPress={checkTextInput}
          >
            <Text style={styles.buttontext}>Get Started</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#D97777'
    },
    auto: {
      width: 340,
      alignSelf: 'center',
      marginTop: 10
    },
    center: {
      alignItems: 'center'
    },
    header: {
      color: 'white',
      fontSize: 36,
      marginTop: 20,
      fontWeight: '700'
    },
    text: {
      fontSize: 20,
      textAlign: 'left',
      color: 'white',
      fontWeight: '600',
      marginLeft: 25
    },
    buttontext: {
      fontSize: 20,
      textAlign: 'left',
      color: '#D97777',
      fontWeight: '600',
    },
    smalltext: {
      fontSize: 16,
      color: 'white',
      whiteSpace: 'wrap',
      maxWidth: 200,
      marginLeft: 8
    },
    image: {
      width: 150,
      height: 150
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
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      width: 190,
      borderRadius: 30,
      backgroundColor: 'white',
      marginTop: 35
    },
    checkboxContainer: {
      flexDirection: "row",
      marginTop: 25,
      justifyContent: 'center'
    },
    checkbox: {
      alignSelf: "center",
    }, 
  });

