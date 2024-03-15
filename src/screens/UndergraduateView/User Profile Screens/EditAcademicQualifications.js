import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { firebase } from '../../../firebase/config';

const EditAcademicQualifications = () => {
  const [qualifications, setQualifications] = useState([{ name: '', duration: '', institution: '' }]);

  const renderQualificationItem = ({ item, index }) => (
    <View style={styles.qualificationItem}>
      <TextInput
        placeholder="Qualification Name"
        placeholderTextColor="#000"
        style={styles.input}
        value={item.name}
        onChangeText={(text) => updateQualification(index, { ...item, name: text })}
      />
      <TextInput
        placeholder="Duration"
        placeholderTextColor="#000"
        style={styles.input}
        value={item.duration}
        onChangeText={(text) => updateQualification(index, { ...item, duration: text })}
      />
      <TextInput
        placeholder="Institution"
        placeholderTextColor="#000"
        style={styles.input}
        value={item.institution}
        onChangeText={(text) => updateQualification(index, { ...item, institution: text })}
      />
            <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => saveQualification(index)}>
          <Text style={styles.okButton}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteQualification(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const addQualification = () => {
    const newQualifications = [...qualifications, { name: '', duration: '', institution: '' }];
    setQualifications(newQualifications);
  };

  const updateQualification = (index, data) => {
    const newQualifications = [...qualifications];
    newQualifications[index] = data;
    setQualifications(newQualifications);
  };

  const saveQualification = async (index) => {
    const qualification = qualifications[index];
    if (qualification.name && qualification.duration && qualification.institution) {
      // Save qualifications to Firestore
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
        await userProfileRef.set({
          qualifications: qualifications,
        }, { merge: true });
        Alert.alert('Success', 'Qualification saved successfully');
      }
    } else {
      Alert.alert('Error', 'Please fill all fields before saving.');
    }
  };

  const deleteQualification = (index) => {
    const newQualifications = [...qualifications];
    newQualifications.splice(index, 1);
    setQualifications(newQualifications);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Academic Qualifications</Text>
      <FlatList
        data={qualifications}
        renderItem={renderQualificationItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={addQualification}>
        <Text>Add Qualification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditAcademicQualifications;
