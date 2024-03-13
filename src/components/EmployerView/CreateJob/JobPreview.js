import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MicrosoftLogo from '../../../assets/companyLogos/microsoftLogo.png'

const JobPreview = ({ route, navigation }) => {
  const { jobData } = route.params;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Job Preview</Text>
      {/* Display job data */}
      <View style={styles.header}>
        {/* Display Company Logo */}
        <Image source={MicrosoftLogo} style={styles.companyLogo} />

        <View style={styles.titleContainer}>
          <Text style={styles.jobTitle}>{jobData.title}</Text>
          <Text style={styles.companyName}>{jobData.company}</Text>
        </View>
      </View>

      <Text style={styles.location}>Remote</Text>
      <Text style={styles.address}>123 Main Street, City, Country</Text>
      <Text style={styles.companyHQ}>Company HQ: 456 HQ Street, HQ City, HQ Country</Text>

      <Text style={styles.sectionTitle}>About the Company</Text>
      <Text style={styles.companyAbout}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Text style={styles.sectionTitle}>Job Description</Text>
      <Text style={styles.jobDescription}>
        {jobData.jobDescription}
      </Text>

      <Text style={styles.sectionTitle}>Job Requirements</Text>
      <Text style={styles.jobRequirements}>
        {jobData.requirements}
      </Text>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.buttonText}>Back to Form</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.buttonText}>Submit Now</Text>
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
    color: '#000',
  },
  headingText: {
    fontSize: 40,
    color: '#019F99',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  companyName: {
    fontSize: 18,
    color: '#555',
  },
  companyLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 20,
    borderRadius: 15,
  },
  titleContainer: {
    flex: 1,
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
    color: 'black',
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
  backButton: {
    alignItems: 'center',
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default JobPreview;
