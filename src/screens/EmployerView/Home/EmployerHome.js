import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class EmployerHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Employer Dashboard</Text>
        </View>
        <View style={styles.companyInfo}>
          <Text style={styles.companyName}>Company Name</Text>
          <Text style={styles.companyDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta eros ac lorem ultrices, vel ultrices lorem hendrerit.</Text>
          <Text style={styles.companyLocation}>Location: City, Country</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3498db',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  companyInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  companyName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  companyDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  companyLocation: {
    fontSize: 16,
    color: '#666',
  },
});

export default EmployerHome;
