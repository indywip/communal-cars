import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';

import add from '../img/add.png'
import home from '../img/home.png'
import user from '../img/User.png'

export default function Footer() {
    
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Image source={home} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={add} style={styles.add} />
      </TouchableOpacity>
      <TouchableOpacity>
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