import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from './screens/Landing'
import Home from './screens/Home'

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default App;
