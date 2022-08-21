import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './screens/redux/Store'
import { Provider } from 'react-redux'

import Landing from './screens/Landing'
import Home from './screens/Home'
import AddCar from './screens/AddCar'
import Rent from './screens/Rent'
import Confirmed from './screens/Confirmed'
import Profile from './screens/Profile'
import EditCar from './screens/EditCar'
import Delete from './screens/Delete'

const App = () => {
  
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddCar" component={AddCar} />
        <Stack.Screen name="Rent" component={Rent} />
        <Stack.Screen name="Confirmed" component={Confirmed} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditCar" component={EditCar} />
        <Stack.Screen name="Delete" component={Delete} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
