import React from 'react';
import { StyleSheet,  SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import add from '../img/add.png'
import home from '../img/home.png'
import user from '../img/User.png'

export default function Footer() {
  
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={home} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddCar')}>
        <Image source={add} style={styles.add} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={user} style={styles.image} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    marginBottom: -32
  },
  image: {
    width: 36,
    height: 36
  },
  add: {
    width: 39,
    height: 40,
    marginLeft: 60,
    marginRight: 60
  }
})