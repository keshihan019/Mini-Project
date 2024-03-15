import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Experience = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('UploadResume');
  };

  return (
    <View style={styles.Experience_container}>
      <Text style={styles.headingText}>Add Your Work Experience</Text>
      <Image
        source={require('../../../assets/images/login.png')}
        style={styles.Experience_image}
        resizeMode="contain"
      />
      <Text style={styles.pageIndicator}>Step 2 out of 3</Text>
      
      {/* Email Address Input */}
      <TextInput
        style={styles.input}
        placeholder="Job Role/Position"
        placeholderTextColor="#000" // Change placeholder text color to black
        keyboardType="email-address"
      />

      {/* Mobile Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Organization/Company"
        placeholderTextColor="#000" // Change placeholder text color to black
        keyboardType="phone-pad"
      />

      {/* Email Address Input */}
      <TextInput
        style={styles.input}
        placeholder="Job Role/Position"
        placeholderTextColor="#000" // Change placeholder text color to black
        keyboardType="email-address"
      />

      {/* Mobile Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Organization/Company"
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



export default Experience;
