import React from 'react'; 
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import Tabs from './UndergraduateView/tabs.js';
import EmployerTabs from './EmployerView/EmployerTabs.js';
import LoginScreen from '../src/screens/LoginScreen/LoginScreen.js';
import RegistrationScreen from '../src/screens/Authentication/RegistrationScreen/RegistrationScreen.js';
import Home from '../src/screens/UndergraduateView/Home/Home.js';
import OptionsSelection from '../src/screens/Authentication/OptionsSelection/OptionSelection.js'
import JobSelection from '../src/screens/Authentication/Job selection/JobSelection.js'
import StatusofJobsApplied from '../src/screens/UndergraduateView/Jobs Applied Screen/StatusofJobsApplied.js';
import Notifications from '../src/screens/UndergraduateView/Notifications Screens/Notifications.js';
import Splash_Screen from '../src/screens/Authentication/SplashScreen/Splash_Screen.js';
import EmployerHome from '../src/screens/EmployerView/Home/EmployerHome.js';
import { getAuthToken } from '../src/authStorage/authStorage.js';

///UG_VIEW -- Settings Screens Imported


import { AccSettings, AllSettings, DeveloperInfo, FrequentlyAskedQuestions, 
NotifSettings, PrivSettings, PrivacyPolicy, SoftwareVersion, Status, TermsConditions, Profile,EditUGProfile,SeeAllRecJobs,JobOpportunity,EmptyNotifications,SeeAllRecentJobs, ContactInfo,UploadResume,Experience,SuccessfullyApplied} from '../src/screens/UndergraduateView/index.js'
import CompanyProfileView_UG from '../src/screens/UndergraduateView/CompanyView/CompanyProfileView_UG.js';



///EMP_VIEW -- Screens 

import CreateJob from '../src/components/EmployerView/CreateJob/CreateJob.js';
import JobPreview from '../src/components/EmployerView/CreateJob/JobPreview.js';

const Stack = createStackNavigator();

export default function Navigation({ navigation }) {
  
  useEffect(() => {
    async function checkUserToken() {
      const userToken = await getAuthToken();
      if (userToken) {

        const role = determineUserRole(userToken); 
        if (role === 'Employer') {
          navigation.navigate('EmployerHomeScreen');
        } else if (role === 'Undergraduate') {
          navigation.navigate('HomeScreen');
        } else {
          console.error('Invalid user role:', role);
        }
      } else {
      
        navigation.navigate('Login');
      }
    }

    checkUserToken();
  }, []);

  function determineUserRole(token) {
    const decodedToken = decode(token);
    if (decodedToken) {
      return decodedToken.role;
    } else {
      return null;
    }
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
        <Stack.Screen name="SettingsScreenStack" component={SettingsScreenStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash_Screen" component={Splash_Screen} options={{headerShown: false}}/>
      <Stack.Screen name="HomeScreen" component={Tabs} options={{headerShown: false}}/>
      <Stack.Screen name="EmployerHomeScreen" component={EmployerTabs} options={{headerShown: false}}/>
      <Stack.Screen name="SettingsScreenStack" component={SettingsScreenStack} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="OptionsSelection" component={OptionsSelection} />
      <Stack.Screen name="EmployerHome" component={EmployerHome} />
      




      {/* UndergraduateView */}
      {/* <Stack.Screen name="Home" component={Tabs} /> */}
      {/* Settings Screens */}
      <Stack.Screen name="AllSettings" component={AllSettings} />
      <Stack.Screen name="AccSettings" component={AccSettings} options={{ title: 'Account Settings' }} />
      <Stack.Screen name="NotifSettings" component={NotifSettings} options={{ title: 'Notification Settings' }} />
      <Stack.Screen name="PrivSettings" component={PrivSettings} options={{ title: 'Privacy Settings' }} />
      <Stack.Screen name="FrequentlyAskedQuestions" component={FrequentlyAskedQuestions} options={{ title: 'FAQ' }} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} options={{ title: 'Terms & Conditions' }} />
      <Stack.Screen name="DeveloperInfo" component={DeveloperInfo} options={{ title: 'Developer Information' }} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: 'Privacy Policy' }} />
      <Stack.Screen name="SoftwareVersion" component={SoftwareVersion} options={{ title: 'Software Version' }} />
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'My Profile' }} />
      <Stack.Screen name="EditUGProfile" component={EditUGProfile} options={{ title: 'Edit Profile' }} />


      {/* JobsApplied Screens */}
      <Stack.Screen name="JobSelection" component={JobSelection} />
      <Stack.Screen name="Status" component={Status} />

      {/* Home Screens */}
      <Stack.Screen name="UG_Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="AllReccomendedJobs" component={SeeAllRecJobs} options={{ title: 'Recommended Jobs' }}/>
      <Stack.Screen name="JobOpportunity" component={JobOpportunity} />
      <Stack.Screen name="SeeAllRecentJobs" component={SeeAllRecentJobs} options={{ title: 'Recent Jobs' }}/>
      <Stack.Screen name="ContactInfo" component={ContactInfo} options={{headerShown: false}}/>
      <Stack.Screen name="UploadResume" component={UploadResume} options={{headerShown: false}}/>
      <Stack.Screen name="Experience" component={Experience} options={{headerShown: false}}/>
      <Stack.Screen name="Success Screen" component={SuccessfullyApplied} options={{headerShown: false}}/>
      <Stack.Screen name="CompanyProfileView_UG" component={CompanyProfileView_UG} options={{headerShown: false}}/>
      {/* Notifications Screens */}
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="EmptyNotifications" component={EmptyNotifications} />


      {/* EmployerView Screens */}
      <Stack.Screen name="CreateJob" component={CreateJob} options={{headerShown: false}}/>
      <Stack.Screen name="JobPreview" component={JobPreview} options={{headerShown: false}}/>


    </Stack.Navigator>
  );
}

const SettingsScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllSettings" component={AllSettings} options={{ title:'All Settings' }} />
      <Stack.Screen name="AccSettings" component={AccSettings} options={{ title: 'Account Settings' }} />
      <Stack.Screen name="NotifSettings" component={NotifSettings} options={{ title: 'Notification Settings' }} />
      <Stack.Screen name="PrivSettings" component={PrivSettings} options={{ title: 'Privacy Settings' }} />
      <Stack.Screen name="FrequentlyAskedQuestions" component={FrequentlyAskedQuestions} options={{ title: 'FAQ' }} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} options={{ title: 'Terms & Conditions' }} />
      <Stack.Screen name="DeveloperInfo" component={DeveloperInfo} options={{ title: 'Developer Information' }} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: 'Privacy Policy' }} />
      <Stack.Screen name="SoftwareVersion" component={SoftwareVersion} options={{ title: 'Software Version' }} />
    </Stack.Navigator>
  );
}


