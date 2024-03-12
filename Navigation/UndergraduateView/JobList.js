import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import styles from './styles'; // Import the provided styles

const JobsList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.jobCard}>
            <View style={styles.titleContainer}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text>{item.company}</Text>
              <Text>{item.appliedDate}</Text>
            </View>
            {/* Move the Button outside the titleContainer */}
            <Button title="See More" onPress={() => { /* handle See More button click */ }} />
          </View>
        </View>
      )}
    />
  );
};

const JobsAppliedTab = () => {
  // Sample data for Jobs Applied
  const data = [
    { id: '1', title: 'Job 1', company: 'Company A', appliedDate: '2022-01-01' },
    // Add more items as needed
  ];

  return <JobsList data={data} />;
};

const JobsAcceptedTab = () => {
  // Sample data for Jobs Accepted
  const data = [
    { id: '1', title: 'Job 2', company: 'Company B', appliedDate: '2022-01-02' },
    // Add more items as needed
  ];

  return <JobsList data={data} />;
};

const JobsPendingTab = () => {
  // Sample data for Jobs Pending
  const data = [
    { id: '1', title: 'Job 3', company: 'Company C', appliedDate: '2022-01-03' },
    // Add more items as needed
  ];

  return <JobsList data={data} />;
};

export { JobsAppliedTab, JobsAcceptedTab, JobsPendingTab };
