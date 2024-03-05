import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import JobOpportunity from '../JobDetails/JobOpportunity';
import styles from './styles';
import microsoftLogo from '../../../assets/companyLogos/microsoftLogo.png'; // Example import for the logo image

const RecommendedCard = () => {
  const navigation = useNavigation();

  const jobData = [
    {
      title: 'Software Engineer',
      company: 'TechCo',
      wages: '$100,000',
      location: 'San Francisco, CA',
      image: microsoftLogo, // Example image source
    },
    {
      title: 'Software Engineer',
      company: 'TechCo',
      wages: '$100,000',
      location: 'San Francisco, CA',
      image: microsoftLogo, // Example image source
    },
    {
      title: 'Software Engineer',
      company: 'TechCo',
      wages: '$100,000',
      location: 'San Francisco, CA',
      image: microsoftLogo, // Example image source
    },
  ];

  const handleSeeMorePress = () => {
    navigation.navigate('AllReccomendedJobs');
    console.log('See More pressed!');
  };

  const handleCardPress = () => {
    navigation.navigate('JobOpportunity');
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recommended Jobs</Text>
        <TouchableOpacity style={styles.seeMoreButton} onPress={handleSeeMorePress}>
          <Text style={styles.seeMoreButtonText}>See More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={jobData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={handleCardPress}>
              <View style={styles.jobCard}>
                <Image source={item.image} style={styles.logoImage} />
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text>{item.company}</Text>
                <Text>Wages: {item.wages}</Text>
                <Text>Location: {item.location}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default RecommendedCard;


