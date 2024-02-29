import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class SoftwareVersion extends Component {
  render() {
    // Replace 'YourAppVersion' with the actual version of your app
    const appVersion = '1.1';

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Software Version</Text>
        <Text style={styles.versionText}>{appVersion}</Text>
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
  },
  versionText: {
    fontSize: 16,
  },
});

export default SoftwareVersion;
