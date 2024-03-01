import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const RecentJobs = () => {
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
      title: 'Recent Job 3',
      company: 'TechCo',
      wages: '$85,000',
      location: 'Chicago, IL',
    },
    // Add more recent job objects as needed
  ];

  

  const handleSeeMorePress = () => {
    // Add your logic for handling the "See More" button press here
    console.log('See More pressed!');
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
        data={jobData} // Show all or only the first item
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text>{item.company}</Text>
            <Text>Wages: {item.wages}</Text>
            <Text>Location: {item.location}</Text>
          </View>
        )}
      />
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
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
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  showAll: {
    backgroundColor: '#000',
    color:'#fff',
    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:15
  },
});

export default RecentJobs;
