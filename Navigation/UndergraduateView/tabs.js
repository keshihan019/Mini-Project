import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Text,View,Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../../src/screens/Authentication/HomeScreen/HomeScreen';
import LoginScreen from '../../src/screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../src/screens/Authentication/RegistrationScreen/RegistrationScreen';
import OptionsSelection from '../../src/screens/Authentication/OptionsSelection/OptionSelection';
import JobSelection from '../../src/screens/Authentication/Job selection/JobSelection';
import SearchIcon from '../../src/assets/icons/search.png';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 30,
                    right: 30,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    height: 60,
                    ...styles.shadow
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={SearchIcon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#019F99' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#019F99' : '#748c94', fontSize: 12}}>
                            Home
                        </Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Login" component={LoginScreen} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={SearchIcon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#019F99' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#019F99' : '#748c94', fontSize: 12}}>
                            Login
                        </Text>
                    </View>
                )
            }}
                />
            <Tab.Screen name="Register" component={RegisterScreen} />
            <Tab.Screen name="Options" component={OptionsSelection} />
            <Tab.Screen name="Job" component={JobSelection} />
        </Tab.Navigator>
    );
}
  const styles = StyleSheet.create({
        shadow :{
            shadowColor: '#7F5DF0',
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
        }

  })
export default Tabs;
