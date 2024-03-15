import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { firebase } from '../../../firebase/config';

const EditWorkExp = () => {
  const [experience, setExperience] = useState([{ name: '', duration: '', organization: '' }]);

  const renderExperienceItem = ({ item, index }) => (
    <View style={styles.experienceItem}>
      <TextInput
        placeholder="Experience Name"
        placeholderTextColor="#000"
        style={styles.input}
        value={item.name}
        onChangeText={(text) => updateExperience(index, { ...item, name: text })}
      />
      <TextInput
        placeholder="Duration"
        placeholderTextColor="#000"
        style={styles.input}
        value={item.duration}
        onChangeText={(text) => updateExperience(index, { ...item, duration: text })}
      />
      <TextInput
        placeholder="Organization"
        placeholderTextColor="#000"
        style={styles.input}
        value={item.organization}
        onChangeText={(text) => updateExperience(index, { ...item, organization: text })}
      />
      

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => saveExperience(index)}>
          <Text style={styles.okButton}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteExperience(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
  const handleSaveWorkExperience = () => {
  
  }

  const addExperience = () => {
    const newExperience = [...experience, { name: '', duration: '', organization: '' }];
    setExperience(newExperience);
  };

  const updateExperience = (index, data) => {
    const newExperience = [...experience];
    newExperience[index] = data;
    setExperience(newExperience);
  };

  const saveExperience = async (index) => {
    const exp = experience[index];
    if (exp.name && exp.duration && exp.organization) {
      // Save experience to Firestore
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
        await userProfileRef.set({
          experience: experience,
        }, { merge: true });
        Alert.alert('Success', 'Experience saved successfully');
      }
    } else {
      Alert.alert('Error', 'Please fill all fields before saving.');
    }
  };

  const deleteExperience = (index) => {
    const newExperience = [...experience];
    newExperience.splice(index, 1);
    setExperience(newExperience);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Work Experience</Text>
      <FlatList
        data={experience}
        renderItem={renderExperienceItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={addExperience}>
        <Text style={{color:'#fff'}}>Add Experience</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={handleSaveWorkExperience}>
        <Text style={{color:'#fff'}}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditWorkExp;
