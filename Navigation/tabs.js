import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen';
import LoginScreen from '../src/screens/LoginScreen/LoginScreen';
import RegisterScreen from '../src/screens/RegistrationScreen/RegistrationScreen';
import OptionsSelection from '../src/screens/OptionsSelection/OptionSelection';
import JobSelection from '../src/screens/Job selection/JobSelection';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Register" component={RegisterScreen} />
            <Tab.Screen name="Options" component={OptionsSelection} />
            <Tab.Screen name="Job" component={JobSelection} />
        </Tab.Navigator>
    );
}

export default Tabs;
