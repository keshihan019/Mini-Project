import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from '../src/screens/LoginScreen/LoginScreen.js';
import RegistrationScreen from '../src/screens/RegistrationScreen/RegistrationScreen.js';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen.js';
import OptionsSelection from '../src/screens/OptionsSelection/OptionSelection.js';
import JobSelection from '../src/screens/Job selection/JobSelection.js'




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createStackNavigator();

export default function navigation() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="OptionsSelection" component={OptionsSelection} />
            <Stack.Screen name="JobSelection" component={JobSelection} />

          </>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}