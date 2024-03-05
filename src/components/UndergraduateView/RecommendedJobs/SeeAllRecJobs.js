import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import microsoftLogo from '../../../assets/companyLogos/microsoftLogo.png';
import styles from './styles';

const SeeAllRecJobs = ({ navigation }) => {
  const jobData = [
    {
      title: 'Software Engineer',
      company: 'TechCo',
      wages: '$100,000',
      location: 'San Francisco, CA',
      image: microsoftLogo,
    },
    {
      title: 'Software Engineer',
      company: 'TechCo',
      wages: '$100,000',
      location: 'San Francisco, CA',
      image: microsoftLogo,
    },
    {
      title: 'Software Engineer',
      company: 'TechCo',
      wages: '$100,000',
      location: 'San Francisco, CA',
      image: microsoftLogo,
    },
    {
        title: 'Software Engineer',
        company: 'TechCo',
        wages: '$100,000',
        location: 'San Francisco, CA',
        image: microsoftLogo,
      },
      {
        title: 'Software Engineer',
        company: 'TechCo',
        wages: '$100,000',
        location: 'San Francisco, CA',
        image: microsoftLogo,
      },
      {
        title: 'Software Engineer',
        company: 'TechCo',
        wages: '$100,000',
        location: 'San Francisco, CA',
        image: microsoftLogo,
      },
    
  ];

  const renderItem = ({ item }) => (
    <View style={styles.SeeAllcard}>
      <Image source={item.image} style={styles.SeeAllimage} />
      <Text style={styles.SeeAlltext}>Title: {item.title}</Text>
      <Text style={styles.SeeAlltext}>Company: {item.company}</Text>
      <Text style={styles.SeeAlltext}>Wages: {item.wages}</Text>
      <Text style={styles.SeeAlltext}>Location: {item.location}</Text>
      <TouchableOpacity style={styles.SeeAllapplyButton}>
        <Text style={styles.SeeAllapplyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.SeeAllcontainer}>
      <FlatList
        data={jobData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.SeeAlllistContainer}
      />
      
    </View>
  );
};



export default SeeAllRecJobs;
