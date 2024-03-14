import React, { useState,useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView, FlatList,Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import 'firebase/firestore';
import {firebase} from '../../../firebase/config'



const EditUGProfile = ({ route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [university, setUniversity] = useState('');
  const [qualifications, setQualifications] = useState([]);
  const [experience, setExperience] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});


  const navigation = useNavigation();

  const validateForm = () => {
    const errors = {};

    if (!firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!phone) {
      errors.phone = 'Phone No. is required';
    }
    if (!address) {
      errors.address = 'Address is required';
    }
    if (!university) {
      errors.university = 'University is required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const usersRef = firebase.firestore().collection('users');
      const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);

      Promise.all([
        usersRef.doc(currentUser.uid).get(),
        userProfileRef.get()
       
      ])
      .then(([userDoc, profileDoc]) => {
        if (userDoc.exists) {
          const userData = userDoc.data();
          setEmail(userData.email);
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
         
        }
        if (profileDoc.exists) {
          const profileData = profileDoc.data();
          setFirstName(profileData.firstName);
          setLastName(profileData.lastName);
          setPhone(profileData.phone);
          setAddress(profileData.address);
          setUniversity(profileData.university);
          setQualifications(profileData.qualifications || []);
          setExperience(profileData.experience || []);
        }
       
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
    }
  }, []);

  const handleSubmit = async () => {
    const formIsValid = validateForm();

    if (formIsValid) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone)) {
        Alert.alert('Invalid Phone No.', 'Please enter a valid phone number', [{ text: 'OK' }]);
        return;
      }
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
      const userData = {
        firstName,
        lastName,
        email,
        phone,
        address,
        university,
        qualifications,
        experience,
      };
      
      await userProfileRef.set(userData, { merge: true });
      Alert.alert('Success', 'Profile updated successfully');

      try {
        const userDoc = await firebase.firestore().collection('users').doc(currentUser.uid).get();
        const userData = userDoc.data();
        
        if (userData && userData.role) {
          await userProfileRef.set({ role: userData.role }, { merge: true });
        }
      } catch (error) {
        console.error('Error fetching and storing user role:', error);
      }
      
      navigation.navigate('Profile');
    } else {
      Alert.alert('Error', 'User not logged in');
    }
    
    
    route.params.onSave({
      firstName,
      lastName,
      email,
      phone,
      address,
      university,
      qualifications,
      experience
    });
    
    navigation.navigate('Profile');
  }
  else {
    Alert.alert('Error', 'Please fill all the required fields');
  }
  };
  
  const addQualification = async() => {
    const newQualifications = [...qualifications];
    const qualification = newQualifications[index];
    if (qualification.name && qualification.duration && qualification.institution) {
      // Update qualifications in state
      setQualifications(newQualifications);
  
      // Save qualifications to Firestore
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
        await userProfileRef.set({
          qualifications: newQualifications,
        }, { merge: true });
      }
      setShowAddQualification(false);
    } else {
      Alert.alert('Error', 'Please fill all fields before saving.');
    }
  };

  const deleteQualification = async (index) => {
    const newQualifications = [...qualifications];
    newQualifications.splice(index, 1);
    setQualifications(newQualifications);
  
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
      await userProfileRef.set({
        qualifications: newQualifications,
      }, { merge: true });
    }
  };

  const updateQualification = (index, data) => {
    const newQualifications = [...qualifications];
    newQualifications[index] = data;
    setQualifications(newQualifications);
  };

  const addExperience = async () => {
    const newExperience = [...experience];
    const exp = newExperience[index];
    if (exp.name && exp.duration && exp.organization) {
      // Update experience in state
      setExperience(newExperience);
  
      // Save experience to Firestore
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
        await userProfileRef.set({
          experience: newExperience,
        }, { merge: true });
      }
    } else {
      Alert.alert('Error', 'Please fill all fields before saving.');
    }
  };

  const deleteExperience = async (index) => {
    const newExperience = [...experience];
    newExperience.splice(index, 1);
    setExperience(newExperience);
  
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
      await userProfileRef.set({
        experience: newExperience,
      }, { merge: true });
    }
  };

  const updateExperience = (index, data) => {
    const newExperience = [...experience];
    newExperience[index] = data;
    setExperience(newExperience);
  };

  const renderQualificationItem = ({ item, index }) => (
    <View style={styles.qualificationItem}>
      <TextInput
        placeholder="Qualification Name"
        style={styles.input}
        value={item.name}
        onChangeText={(text) => updateQualification(index, { ...item, name: text })}
      />
      <TextInput
        placeholder="Duration"
        style={styles.input}
        value={item.duration}
        onChangeText={(text) => updateQualification(index, { ...item, duration: text })}
      />
      <TextInput
        placeholder="Institution"
        style={styles.input}
        value={item.institution}
        onChangeText={(text) => updateQualification(index, { ...item, institution: text })}
      />
      <TouchableOpacity onPress={() => saveQualification(index)}>
        <Text style={styles.okButton}>Ok</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteQualification(index)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
  
  const renderExperienceItem = ({ item, index }) => (
    <View style={styles.qualificationItem}>
      <TextInput
        placeholder="Experience Name"
        style={styles.input}
        value={item.name}
        onChangeText={(text) => updateExperience(index, { ...item, name: text })}
      />
      <TextInput
        placeholder="Duration"
        style={styles.input}
        value={item.duration}
        onChangeText={(text) => updateExperience(index, { ...item, duration: text })}
      />
      <TextInput
        placeholder="Organization"
        style={styles.input}
        value={item.organization}
        onChangeText={(text) => updateExperience(index, { ...item, organization: text })}
      />
      <TouchableOpacity onPress={() => saveExperience(index)}>
        <Text style={styles.okButton}>Ok</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteExperience(index)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );


  return (
    <SafeAreaView style={styles.scrollContainer}>
    
      <View style={styles.container}>
        <View style={styles.action}>
          <FontAwesome name='user-o' size={20} />
          <TextInput
            placeholder='First Name'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
        </View>
        

        <View style={styles.action}>
          <FontAwesome name='user-o' size={20} />
          <TextInput
            placeholder='Last Name'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>
        
        
        <View style={styles.action}>
          <FontAwesome name='envelope' size={20} />
          <TextInput
            placeholder='Email'
            keyboardType='email-address'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={email}
            onChangeText={text => setEmail(text)}
            editable={false}
          />
        </View>
        
        
        <View style={styles.action}>
          <FontAwesome name='phone' size={20} />
          <TextInput
            placeholder='Phone No.'
            keyboardType='number-pad'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={phone}
            onChangeText={text => setPhone(text)}
          />
        </View>
        
        
        <View style={styles.action}>
          <FontAwesome name='globe' size={20} />
          <TextInput
            placeholder='Address'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={address}
            onChangeText={text => setAddress(text)}
          />
        </View>
        

        <View style={styles.action}>
          <FontAwesome name='globe' size={20} />
          <TextInput
            placeholder='University'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={university}
            onChangeText={text => setUniversity(text)}
          />
        </View>
        

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


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          <FlatList
            data={experience}
            renderItem={renderExperienceItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity style={styles.addButton} onPress={addExperience}>
            <Text>Add Experience</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
    
  );
};


export default EditUGProfile;
