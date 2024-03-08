import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Experience = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('UploadResume');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Add Your Work Experience</Text>
      <Image
        source={require('../../../assets/images/login.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.pageIndicator}>Step 2 out of 4</Text>
      
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40, // Adjust paddingTop to move content closer to the top
    backgroundColor: '#fff', // Change background color to white
  },
  image: {
    width: '90%', // Increase image width
    height: 200, // Increase image height
    marginBottom: 20,
    alignSelf: 'center',
  },
  pageIndicator: {
    marginBottom: 20,
    color: '#019F99', // Change text color to match the specified color
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000', // Change text color to black
  },
  nextButton: {
    backgroundColor: '#0275d8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop:100
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,

  },
  headingText:{
    fontSize:40,
    color:'#019F99',
    fontWeight:'bold',
    paddingRight:45
  }
});

export default Experience;
