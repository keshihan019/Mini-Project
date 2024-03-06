import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';

const UploadResume = () => {
  const [fileUri, setFileUri] = useState(null);
  const navigation = useNavigation();

  const handlePickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileUri(res.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        // Handle other errors
        console.log(err);
      }
    }
  };

  const handleSubmit = () => {
    // Handle submission logic
    navigation.navigate('Success Screen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Resume</Text>

      {/* Button to pick document */}
      <Button title="Pick Document" onPress={handlePickDocument} />

      {/* Display selected document */}
      {fileUri && <Text style={styles.selectedFile}>Selected File: {fileUri}</Text>}

      {/* Submit button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
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
  selectedFile: {
    marginTop: 20,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#0275d8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default UploadResume;
