// App.js
import { createStackNavigator } from '@react-navigation/stack';
import { decode, encode } from 'base-64';
import 'firebase/auth';
import 'firebase/firestore';
import 'react-native-gesture-handler';
import Navigation from './Navigation/navigation';
import React, { useEffect, useState } from 'react';
import { getAuthToken } from './src/authStorage/authStorage';

if (!global.btoa) { global.btoa = encode; }
if (!global.atob) { global.atob = decode; }

const Stack = createStackNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const token = await getAuthToken();
      setUserToken(token);
      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Navigation userToken={userToken} />
  );
}

  
