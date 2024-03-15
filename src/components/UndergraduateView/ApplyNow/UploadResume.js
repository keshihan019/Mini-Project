import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

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
    <View style={styles.Resume_container}>
      <Text style={styles.Resume_headingText}>Upload your resume</Text>
      <Image
        source={require('../../../assets/images/login.png')}
        style={styles.Resume_image}
        resizeMode="contain"
      />
      <Text style={styles.pageIndicator}>Step 3 out of 3</Text>

      {/* Button to pick document */}
      <Button title="Select my resume" onPress={handlePickDocument} />

      {/* Display selected document */}
      {fileUri && <Text style={styles.selectedFile}>Selected File: {fileUri}</Text>}

      {/* Submit button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};



export default UploadResume;
