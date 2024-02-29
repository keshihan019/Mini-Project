import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './UndergraduateView/tabs.js';
import LoginScreen from '../src/screens/LoginScreen/LoginScreen.js';
import RegistrationScreen from '../src/screens/RegistrationScreen/RegistrationScreen.js';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen.js';
import OptionsSelection from '../src/screens/OptionsSelection/OptionSelection.js'
import JobSelection from '../src/screens/Job selection/JobSelection.js'

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeTab" component={Tabs} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="OptionsSelection" component={OptionsSelection} />
      <Stack.Screen name="JobSelection" component={JobSelection} />
    </Stack.Navigator>
  );
}
