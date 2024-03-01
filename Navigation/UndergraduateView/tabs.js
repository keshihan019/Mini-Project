import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Text,View,Image, TouchableOpacity } from 'react-native';
import Home from '../../src/screens/UndergraduateView/Home/Home';
import HomeScreen from '../../src/screens/Authentication/HomeScreen/HomeScreen';
import LoginScreen from '../../src/screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../src/screens/Authentication/RegistrationScreen/RegistrationScreen';
import OptionsSelection from '../../src/screens/Authentication/OptionsSelection/OptionSelection';
import JobSelection from '../../src/screens/Authentication/Job selection/JobSelection';

///Icons imported for the bottom Navbar
import NotificationsIcon from '../../src/assets/icons/notification.png';
import HomeIcon from '../../src/assets/icons/Home.png';
import SettingsIcon from '../../src/assets/icons/setting.png';
import JobsAppliedIcon from '../../src/assets/icons/jobsApplied.png';
import ProfileIcon from '../../src/assets/icons/user.png';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    paddingVertical:5,
                    paddingBottom:15,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    height: 60,
                    ...styles.shadow
                },
            }}
        >
            <Tab.Screen name="Register" component={RegisterScreen} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={SettingsIcon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#019F99' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#019F99' : '#748c94', fontSize: 12,textAlign:'center'}}>
                            Settings
                        </Text>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Login" component={LoginScreen} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={JobsAppliedIcon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#019F99' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#019F99' : '#748c94', fontSize: 12,textAlign:'center'}}>
                            Jobs Applied
                        </Text>
                    </View>
                )
            }}
            />           
            <Tab.Screen name="Home" component={Home} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={HomeIcon}
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
            }}
            />
            <Tab.Screen name="Options" component={OptionsSelection} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={NotificationsIcon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#019F99' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#019F99' : '#748c94', fontSize: 12,textAlign:'center'}}>
                            Notifications
                        </Text>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Job" component={JobSelection} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={ProfileIcon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#019F99' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#019F99' : '#748c94', fontSize: 12,textAlign:'center'}}>
                            Profile
                        </Text>
                    </View>
                )
            }}
            />
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
