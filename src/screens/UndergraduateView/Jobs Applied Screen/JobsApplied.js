import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import React from 'react';
import StatusofJobsApplied from './StatusofJobsApplied';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const JobsApplied = () => {
  const navigation = useNavigation();

  const handleSeeJobs = () => {
    navigation.navigate('Status');
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg-1.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={require('../../../assets/images/JobsAppliedBG.png')} style={styles.illustration} />

          <Text style={styles.title}>You've Applied to Some Amazing Jobs!</Text>
          <Text style={styles.subtitle}>Keep up the good work!</Text>

          <TouchableOpacity onPress={handleSeeJobs}>
            <Text style={styles.linkText}>See the jobs you have applied for</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 250,
    borderRadius: 10,
    alignItems: 'center',
    height:'100%'
  },
  backgroundImage: {
    
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  illustration: {
    width: 300,
    height: 300,
    marginBottom: 20,
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
