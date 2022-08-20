import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from './screens/Landing'
import Home from './screens/Home'
import AddCar from './screens/AddCar'
import Rent from './screens/Rent'
import Confirmed from './screens/Confirmed'

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddCar" component={AddCar} />
        <Stack.Screen name="Rent" component={Rent} />
        <Stack.Screen name="Confirmed" component={Confirmed} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default App;
