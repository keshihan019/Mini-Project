import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import microsoftLogo from '../../../assets/companyLogos/microsoftLogo.png';

const RecentJobs = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);

  const jobData = [
    {
      title: 'Recent Job 1',
      company: 'TechCo',
      wages: '$90,000',
      location: 'New York, NY',
    },
    {
      title: 'Recent Job 2',
      company: 'TechCo',
      wages: '$95,000',
      location: 'Los Angeles, CA',
    },
    {
      title: 'Recent Job 3',
      company: 'TechCo',
      wages: '$85,000',
      location: 'Chicago, IL',
    },
    {
      title: 'Recent Job 4',
      company: 'TechCo',
      wages: '$85,000',
      location: 'Chicago, IL',
    },
    // Add more recent job objects as needed
  ];

  const handleSeeMorePress = () => {
    navigation.navigate('SeeAllRecentJobs');
    console.log('See More pressed!');
  };

  const handleCardPress = () => {
    navigation.navigate('JobOpportunity');
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recent Jobs</Text>
        <TouchableOpacity style={styles.seeMoreButton} onPress={handleSeeMorePress}>
          <Text style={styles.seeMoreButtonText}>See More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={jobData} 
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleCardPress}>
            <View style={styles.jobCard}>
              <View style={styles.jobDetailsColumn}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text style={styles.jobtext}>{item.company}</Text>
                <Text style={styles.jobtext}>Wages: {item.wages}</Text>
                <Text style={styles.jobtext}>Location: {item.location}</Text>
              </View>
              <View style={styles.logoColumn}>
                <Image source={microsoftLogo} style={styles.logoImage} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RecentJobs;
