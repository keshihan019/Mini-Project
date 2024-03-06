import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ContactInfo = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Experience');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageIndicator}>Page 1 out of 4</Text>
      
      {/* Email Address Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
      />

      {/* Mobile Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Mobile Phone Number"
        keyboardType="phone-pad"
      />
      
      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    color:'black',
    backgroundColor:'#777'
  },
  pageIndicator: {
    marginBottom: 20,
    color:'black'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color:'black'
  },
  nextButton: {
    backgroundColor: '#0275d8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ContactInfo;
