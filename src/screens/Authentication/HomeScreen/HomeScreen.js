import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { firebase } from '../../../firebase/config';

export default function HomeScreen(props) {
 

  const navigateToLogin = () => {
    // Navigate to the LoginScreen
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
