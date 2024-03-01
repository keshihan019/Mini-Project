import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const JobOpportunity = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.jobTitle}>Software Engineer</Text>
      <Text style={styles.companyName}>TechCo</Text>
      
      {/* Display Company Logo */}
      {/* <Image source={require('../assets/images/company_logo.png')} style={styles.companyLogo} /> */}

      <Text style={styles.location}>Remote</Text>
      <Text style={styles.address}>123 Main Street, City, Country</Text>
      <Text style={styles.companyHQ}>Company HQ: 456 HQ Street, HQ City, HQ Country</Text>

      <Text style={styles.sectionTitle}>About the Company</Text>
      <Text style={styles.companyAbout}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Text style={styles.sectionTitle}>Job Description</Text>
      <Text style={styles.jobDescription}>
        - Develop and maintain software applications
        {'\n'}- Collaborate with cross-functional teams
        {'\n'}- Ensure code quality and performance
      </Text>

      <Text style={styles.sectionTitle}>Job Requirements</Text>
      <Text style={styles.jobRequirements}>
        - Bachelor's degree in Computer Science or related field
        {'\n'}- Proficient in JavaScript and React Native
        {'\n'}- Strong problem-solving skills
      </Text>

      {/* Apply Button */}
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  companyName: {
    fontSize: 18,
    color: '#555',
    marginBottom: 12,
  },
  companyLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    color: '#777',
    marginBottom: 12,
  },
  companyHQ: {
    fontSize: 16,
    color: '#777',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  companyAbout: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  jobDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  jobRequirements: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  applyButton: {
    backgroundColor: '#27ae60',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default JobOpportunity;
