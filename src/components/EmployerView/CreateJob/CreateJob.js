// CreateJob.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreateJob = () => {
  const navigation = useNavigation();
  const [jobData, setJobData] = useState({
    title: '',
    workplace: '',
    location: '',
    employmentType: '',
    jobDescription: '',
    skillsRequired: '',
  });

  const handleSubmit = () => {
    
  };

  const handlePreview = () => {
    navigation.navigate('JobPreview', { jobData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Create Job</Text>
      {/* Job Title Input */}
      <TextInput
        style={styles.input}
        placeholder="Job Title"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, title: text})}
      />
      
      {/* Workplace Input */}
      <TextInput
        style={styles.input}
        placeholder="Workplace (remote, hybrid, onsite)"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, workplace: text})}
      />
      {/* Location Input */}
      <TextInput
        style={styles.input}
        placeholder="Location"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, location: text})}
      />
      {/* Employment Type Input */}
      <TextInput
        style={styles.input}
        placeholder="Employment Type (Fulltime, Part Time, Contract, Temporary, Internship)"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, employmentType: text})}
      />
      {/* Job Description Input */}
      <TextInput
        style={[styles.input, { height: 100 }]} // Increase height for description input
        placeholder="Add Job Description"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, jobDescription: text})}
        multiline={true}
      />
      {/* Skills Required Input */}
      <TextInput
        style={[styles.input, { height: 100 }]} // Increase height for skills input
        placeholder="Add Skills required"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, skillsRequired: text})}
        multiline={true}
      />
      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handlePreview}>
        <Text style={styles.submitButtonText}>View Preview</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  headingText: {
    fontSize: 40,
    color: '#019F99',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom:30
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000',
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#0275d8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical:10
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CreateJob;
