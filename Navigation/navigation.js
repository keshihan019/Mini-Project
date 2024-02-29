import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './tabs';
import LoginScreen from '../src/screens/LoginScreen/LoginScreen.js';
import RegistrationScreen from '../src/screens/RegistrationScreen/RegistrationScreen.js';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen.js';
import OptionsSelection from '../src/screens/OptionsSelection/OptionSelection.js'
import JobSelection from '../src/screens/Job selection/JobSelection.js'
import {Home,JobsApplied,StatusofJobsApplied,Notifications,AccSettings,AllSettings,DeveloperInfo,FrequentlyAskedQuestions,NotifSettings,PrivacyPolicy,PrivSettings,SoftwareVersion,TermsConditions,Profile,EditUGProfile} from '../src/screens/Undergrauate View/index.js';


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
      <Stack.Screen name="UGHome" component={Home} />

      
{/* --------------StackSettings Screens--------------------------- */}   
<Stack.Screen name="AllSettings" component={AllSettings} />
        <Stack.Screen name="AccSettings" component={AccSettings} 
                      options={{
                        headerShown: true,
                        title: 'Account Settings', 
                        headerStyle: {
                          backgroundColor: '#000', 
                        },
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
        }}/>
        <Stack.Screen name="NotifSettings" component={NotifSettings}
                      options={{
                        headerShown: true,
                        title: 'Notification Settings', 
                        headerStyle: {
                          backgroundColor: '#000', 
                        },
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
        }} />
  <Stack.Screen name="PrivSettings" component={PrivSettings}
                      options={{
                        headerShown: true,
                        title: 'Privacy Settings', 
                        headerStyle: {
                          backgroundColor: '#000', 
                        },
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
        }} />
<Stack.Screen name="FrequentlyAskedQuestions" component={FrequentlyAskedQuestions}
                      options={{
                        headerShown: true,
                        title: 'FAQ', 
                        headerStyle: {
                          backgroundColor: '#000', 
                        },
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
        }} />
<Stack.Screen name="TermsConditions" component={TermsConditions}
                      options={{
                        headerShown: true,
                        title: 'Privacy Settings', 
                        headerStyle: {
                          backgroundColor: '#000', 
                        },
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
        }} />
<Stack.Screen name="DeveloperInfo" component={DeveloperInfo}
                      options={{
                        headerShown: true,
                        title: 'Developer Information', 
                        headerStyle: {
                          backgroundColor: '#000', 
                        },
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
        }} />
<Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}
                      options={{
                        headerShown: true,
                        title: 'Privacy Policy', 
                        headerStyle: {
                          backgroundColor: '#000', 
                        },
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
        }} />
<Stack.Screen name="SoftwareVersion" component={SoftwareVersion}
                      options={{
                        headerShown: true,
                        title: 'SoftwareVersion', 
                        headerStyle: {
                          backgroundColor: '#000', 
                        },
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
        }} />
{/* --------------End  StackSettings Screens--------------------------- */}  




{/* --------------JobsApplied Tab  //\\ Screens--------------------------- */}

<Stack.Screen name="StatusofJobsApplied" component={StatusofJobsApplied} />
<Stack.Screen name="JobsApplied" component={JobsApplied} />
       
{/* -nEnd  JobsApplied Tab Screens  \\//--------------------------- */}  


<Stack.Screen name="Profile" component={Profile} />
<Stack.Screen name="EditUGProfile" 
                    component={EditUGProfile} 
                    options={{
                      headerShown: true,
                      title: 'Edit User Profile', // Set your header title here
                      headerStyle: {
                        backgroundColor: '#000', // Customize the header background color
                      },
                      headerTintColor: '#fff', // Customize the header text color
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    }}/>

    </Stack.Navigator>
  );
}
