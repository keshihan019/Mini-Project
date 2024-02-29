import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import JobOpportunity from '../JobDetails/JobOpportunity';

const RecommendedCard = () => {
  const navigation = useNavigation();

  const jobData = [
    {
      title: 'Software Engineer',
      company: 'TechCo',
      wages: '$100,000',
      location: 'San Francisco, CA',
    },
    {
      title: 'Software Engineer',
      company: 'TechCo',
      wages: '$100,000',
      location: 'San Francisco, CA',
    },
    {
      title: 'Software Engineer',
      company: 'TechCo',
      wages: '$100,000',
      location: 'San Francisco, CA',
    },
  ];

  const handleSeeMorePress = () => {
    // Add your logic for handling the "See More" button press here
    console.log('See More pressed!');
  };

  const handleCardPress = () => {
    // Navigate to the Job Opportunity screen
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

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 20,
    marginLeft: 10,
  },
  container: {
    flexDirection: 'row', // to place the "See More" button next to the FlatList
    padding: 10,
    marginLeft: 1,
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    minWidth: 300,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMoreButton: {
    backgroundColor: '#3498db', // Add your preferred background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10,
    alignSelf: 'center',
  },
  seeMoreButtonText: {
    color: 'white', // Add your preferred text color
    fontWeight: 'bold',
  },
});

export default RecommendedCard;
