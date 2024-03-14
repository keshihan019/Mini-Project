import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { AntDesign } from '@expo/vector-icons'; 

const Dashboard = () => {
  const navigateToApplications = () => {
    console.log('Navigate to Job Applications Page');
  };

  const navigateToSelectedCandidates = () => {
    console.log('Navigate to Selected Candidates Page');
  };

  const navigateToRejectedCandidates = () => {
    console.log('Navigate to Rejected Candidates Page');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Dashboard</Text>

      {/* Job Applications Section */}
      <TouchableOpacity onPress={navigateToApplications}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Job Applications</Text>
          <Text style={styles.sectionSubtitle}>Number of Applications: 50</Text>
          <View style={styles.dotsContainer}>
            {/* <AntDesign name="ellipsis1" size={24} color="black" /> */}
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.percentageText}>50%</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Selected Candidates Section */}
      <TouchableOpacity onPress={navigateToSelectedCandidates}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Selected Candidates</Text>
          <Text style={styles.sectionSubtitle}>Number of Candidates: 30</Text>
          <View style={styles.dotsContainer}>
            {/* <AntDesign name="ellipsis1" size={24} color="black" /> */}
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.percentageText}>30%</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Rejected Candidates Section */}
      <TouchableOpacity onPress={navigateToRejectedCandidates}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Rejected Candidates</Text>
          <Text style={styles.sectionSubtitle}>Number of Candidates: 20</Text>
          <View style={styles.dotsContainer}>
            {/* <AntDesign name="ellipsis1" size={24} color="black" /> */}
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.percentageText}>20%</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  circleContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Dashboard;