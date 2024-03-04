import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PlusIcon from '../../../assets/icons/add.png';
import CompanyOverview from '../../../components/EmployerView/CompanyOverview';

export class EmployerHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Employer Dashboard</Text>
        </View>
        <CompanyOverview/>
        {/* Floating Plus Button */}
        <TouchableOpacity style={styles.floatingButton}>
          <Image source={PlusIcon} style={styles.plusIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative', // Required for absolute positioning inside
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
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3498db',
    position: 'absolute',
    bottom: 80,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Add some shadow for Android
  },
  plusIcon: {
    width: 30, // Adjust width to decrease size
    height: 30, // Adjust height to decrease size
    tintColor: '#fff', // Optional: Change color of the icon
  },
});

export default EmployerHome;
