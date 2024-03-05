import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Experience = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('UploadResume');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experience</Text>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#0275d8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Experience;
