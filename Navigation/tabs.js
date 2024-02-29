import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Text,View,Image, TouchableOpacity } from 'react-native';
import Profile from '../src/screens/Undergrauate View/User Profile Screens/Profile';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen';
import LoginScreen from '../src/screens/LoginScreen/LoginScreen';
import Notifications from '../src/screens/Undergrauate View/Notifications Screens/Notifications';
import AllSettings from '../src/screens/Undergrauate View/Settings Screen/AllSettings';
import { StatusofJobsApplied } from '../src/screens/Undergrauate View';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    paddingBottom:25,
                    paddingTop:10,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    height: 70,
                    ...styles.shadow
                },
            }}
        >

<Tab.Screen name="AllSettings" component={AllSettings} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../src/assets/icons/setting.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#019F99' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#019F99' : '#748c94', fontSize: 12}}>
                            Settings
                        </Text>
                    </View>
                )
            }}/>
<Tab.Screen name="StatusofJobsApplied" component={StatusofJobsApplied} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../src/assets/icons/jobsApplied.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#019F99' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#019F99' : '#748c94', fontSize: 12}}>
                            Jobs Applied
                        </Text>
                    </View>
                )
            }}/>
<Tab.Screen name="Home" component={HomeScreen} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../src/assets/icons/Home.png')}
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
<Tab.Screen name="Notifications" component={Notifications} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../src/assets/icons/notification.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#019F99' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#019F99' : '#748c94', fontSize: 12}}>
                            Notifications
                        </Text>
                    </View>
                )
            }}/>
<Tab.Screen name="Profile" component={Profile} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../src/assets/icons/user.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#019F99' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#019F99' : '#748c94', fontSize: 12}}>
                            My profile
                        </Text>
                    </View>
                )
            }}/>

            
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
