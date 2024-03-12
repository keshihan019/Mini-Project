import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import EmployerHome from '../../src/screens/EmployerView/Home/EmployerHome';
import JobSelection from '../../src/screens/Authentication/Job selection/JobSelection';
import { JobsApplied } from '../../src/screens/UndergraduateView/index';
import AllSettings from '../../src/screens/UndergraduateView/Settings Screen/AllSettings';
import Notifications from '../../src/screens/UndergraduateView/Notifications Screens/Notifications'
import CompanyProfile from '../../src/screens/EmployerView/Profile/CompanyProfile';

///Icons imported for the bottom Navbar
import NotificationsIcon from '../../src/assets/icons/notification.png';
import HomeIcon from '../../src/assets/icons/Home.png';
import SettingsIcon from '../../src/assets/icons/setting.png';
import JobsAppliedIcon from '../../src/assets/icons/jobsApplied.png';
import ProfileIcon from '../../src/assets/icons/user.png';

const Tab = createBottomTabNavigator();

const EmployerTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="EmployerHome"
      screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          paddingVertical: 5,
          paddingBottom: 15,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 5,
          height: 60,
          ...styles.shadow
        },
      }}
    >
      <Tab.Screen
        name="AllSettings"
        component={AllSettings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={SettingsIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#019F99' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#019F99' : '#748c94', fontSize: 12, textAlign: 'center' }}>
                Settings
              </Text>
            </View>
          ),
          headerShown: false // Hide the header
        }}
      />
      <Tab.Screen
        name="JobsApplied"
        component={JobsApplied}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={JobsAppliedIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#019F99' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#019F99' : '#748c94', fontSize: 12, textAlign: 'center' }}>
                Applications Received
              </Text>
            </View>
          ),
          headerShown: false // Hide the header
        }}
      />
      <Tab.Screen
        name="EmployerHome"
        component={EmployerHome} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={HomeIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#019F99' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#019F99' : '#748c94', fontSize: 12 }}>
                Home
              </Text>
            </View>
          ),
          headerShown: false // Hide the header
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={NotificationsIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#019F99' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#019F99' : '#748c94', fontSize: 12, textAlign: 'center' }}>
                Notifications
              </Text>
            </View>
          ),
          headerShown: false // Hide the header
        }}
      />
      <Tab.Screen
        name="CompanyProfile"
        component={CompanyProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={ProfileIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#019F99' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#019F99' : '#748c94', fontSize: 12, textAlign: 'center' }}>
                Profile
              </Text>
            </View>
          ),
          headerShown: false // Hide the header
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
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
export default EmployerTabs;
