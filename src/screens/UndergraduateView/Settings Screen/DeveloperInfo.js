import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export class DeveloperInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Developer Information</Text>
        <Text style={styles.infoText}>Name: John Doe</Text>
        <Text style={styles.infoText}>Email: john.doe@example.com</Text>
        <Text style={styles.infoText}>GitHub: github.com/johndoe</Text>
        <Text style={styles.infoText}>LinkedIn: linkedin.com/in/johndoe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#000'
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color:'#000'
  },
});

export default DeveloperInfo;
