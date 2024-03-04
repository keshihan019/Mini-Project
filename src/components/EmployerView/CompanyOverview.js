import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompanyOverview = ({ mission, vision, values }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company Overview</Text>
      <Text style={styles.subtitle}>Mission:</Text>
      <Text style={styles.content}>{mission}</Text>
      <Text style={styles.subtitle}>Vision:</Text>
      <Text style={styles.content}>{vision}</Text>
      <Text style={styles.subtitle}>Values:</Text>
      <Text style={styles.content}>{values}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2, // Add shadow for Android
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'#000'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color:'#000'
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
    color:'#000'
  },
});

export default CompanyOverview;
