// App.js
import { createStackNavigator } from '@react-navigation/stack';
import { decode, encode } from 'base-64';
import 'firebase/auth';
import 'firebase/firestore';
import 'react-native-gesture-handler';
import Navigation from './Navigation/navigation';
import Tabs from './Navigation/tabs';
import { NavigationContainer } from '@react-navigation/native';

if (!global.btoa) { global.btoa = encode; }
if (!global.atob) { global.atob = decode; }

const Stack = createStackNavigator();



export default function App() {
  return (
    <>
      <Navigation />
     
    </>
  );

}

  
