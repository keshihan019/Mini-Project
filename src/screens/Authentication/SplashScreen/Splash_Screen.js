import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, SafeAreaView, Image, StyleSheet, View } from 'react-native';
import Login from '../../LoginScreen/LoginScreen'

const Stack = createNativeStackNavigator();

const Splash_Screen = () => {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 2000);
  }, []);

  if (isSplashScreenVisible) {
    return (
      <SafeAreaView style={styles.container}>
        {/* <StatusBar hidden={true} /> */}
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require('../../../assets/images/UniJobs_logo.png')}
              style={styles.logo}
              resizeMode='center'
            />
          </View>
        </ScrollView>
        {/* <StatusBar hidden /> */}
      </SafeAreaView>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name=" " component={Login} />
      </Stack.Navigator>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
    height: '100%',
    margin: 10,
    padding: 20,
    flex: 1,
  },
  logo: {
    width: 400,
    height: 350,
  },
  container: {
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
    paddingTop: 100,
    justifyContent: 'center',
  },
});

export default Splash_Screen;
