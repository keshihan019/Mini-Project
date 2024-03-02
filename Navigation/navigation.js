import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './UndergraduateView/tabs.js';
import LoginScreen from '../src/screens/LoginScreen/LoginScreen.js';
import RegistrationScreen from '../src/screens/Authentication/RegistrationScreen/RegistrationScreen.js';
import Home from '../src/screens/UndergraduateView/Home/Home.js';
import OptionsSelection from '../src/screens/Authentication/OptionsSelection/OptionSelection.js'
import JobSelection from '../src/screens/Authentication/Job selection/JobSelection.js'
import StatusofJobsApplied from '../src/screens/UndergraduateView/Jobs Applied Screen/StatusofJobsApplied.js';

///UG_VIEW -- Settings Screens Imported
import { AccSettings, AllSettings, DeveloperInfo, FrequentlyAskedQuestions, NotifSettings, PrivSettings, PrivacyPolicy, SoftwareVersion, Status, TermsConditions } from '../src/screens/UndergraduateView/index.js'

const Stack = createStackNavigator();

export default function Navigation() {
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
      
      <Stack.Screen name="HomeTab" component={Tabs} options={{headerShown: false}}/>
      <Stack.Screen name="SettingsScreenStack" component={SettingsScreenStack} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="OptionsSelection" component={OptionsSelection} />
      <Stack.Screen name="JobSelection" component={JobSelection} />
      <Stack.Screen name="Status" component={Status} />



      {/* UndergraduateView */}
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


      {/* JobsApplied Screens */}

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
