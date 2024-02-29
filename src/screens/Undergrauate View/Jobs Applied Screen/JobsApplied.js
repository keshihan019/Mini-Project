import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import StatusofJobsApplied from './StatusofJobsApplied';
import { useNavigation } from '@react-navigation/native';

const JobsApplied = () => {
  const navigation = useNavigation();

  const handleSeeJobs = () => {
    navigation.navigate('StatusofJobsApplied');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/All_set_to_go.png')} style={styles.illustration} />

      <Text style={styles.title}>You've Applied to Some Amazing Jobs!</Text>
      <Text style={styles.subtitle}>Keep up the good work!</Text>

      <TouchableOpacity onPress={handleSeeJobs}>
        <Text style={styles.linkText}>See the jobs you have applied for</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 80,
    marginTop: -160,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
  linkText: {
    fontSize: 16,
    paddingTop: 20,
    color: '#019f99',
    textDecorationLine: 'underline',
  },
});

export default JobsApplied;
