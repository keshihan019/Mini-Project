import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './styles';

export class DeveloperInfo extends Component {
  render() {
    return (
      <View style={styles.DevInfocontainer}>
        <Text style={styles.DevInfotitle}>Developer Information</Text>
        <Text style={styles.DevInfoinfoText}>Unijobs mobile application is being developed</Text>
        <Text style={styles.DevInfoinfoText}>by a group of undergraduates from </Text>
        <Text style={styles.DevInfoinfoText}>Sabaragamuwa University of Sri Lanka.</Text>
        
      </View>
    );
  }
}


export default DeveloperInfo;
