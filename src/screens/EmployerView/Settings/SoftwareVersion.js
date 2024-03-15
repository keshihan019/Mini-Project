import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './styles';

export class SoftwareVersion extends Component {
  render() {
    // Replace 'YourAppVersion' with the actual version of your app
    const appVersion = '1.1';

    return (
      <View style={styles.SWversioncontainer}>
        <Text style={styles.SWversiontitle}>Software Version</Text>
        <Text style={styles.SWversionversionText}>{appVersion}</Text>
      </View>
    );
  }
}



export default SoftwareVersion;
