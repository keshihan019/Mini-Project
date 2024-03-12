import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ContactInfo = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Experience');
  };

  return (
    <View style={styles.ContactInfo_container}>
      <Text style={styles.ContactInfo_headingText}>Add Your Contact Information</Text>
      <Image
        source={require('../../../assets/images/login.png')}
        style={styles.ContactInfo_image}
        resizeMode="contain"
      />
      <Text style={styles.pageIndicator}>Step 1 out of 4</Text>
      
      {/* Email Address Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#000" // Change placeholder text color to black
        keyboardType="email-address"
      />

      {/* Mobile Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Mobile Phone Number"
        placeholderTextColor="#000" // Change placeholder text color to black
        keyboardType="phone-pad"
      />
      
      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ContactInfo;
