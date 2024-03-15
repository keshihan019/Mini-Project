import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../../firebase/config';
import styles from './styles';

const EditUGProfile = ({ route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [university, setUniversity] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [experience, setExperience] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  const navigation = useNavigation();

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setProfilePicture("https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png");
      }
    });
  };

  const handleCameraCapture = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setProfilePicture(response.uri);
      }
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!firstName) errors.firstName = 'First Name is required';
    if (!lastName) errors.lastName = 'Last Name is required';
    if (!email) errors.email = 'Email is required';
    if (!phone) errors.phone = 'Phone No. is required';
    if (!address) errors.address = 'Address is required';
    if (!university) errors.university = 'University is required';
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
          setExperience(profileData.experience || []);
          setProfilePicture(profileData.profilePicture || null);
        }
      })
      .catch(error => {
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
        const userData = { firstName, lastName, email, phone, address, university, experience, profilePicture };
        await userProfileRef.set(userData, { merge: true });
        Alert.alert('Success', 'Profile updated successfully');
      } else {
        Alert.alert('Error', 'User not logged in');
      }
      route.params.onSave({ firstName, lastName, email, phone, address, university, experience, profilePicture });
      navigation.navigate('Profile');
    } else {
      Alert.alert('Error', 'Please fill all the required fields');
    }
  };

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleImagePicker} style={styles.profileImageContainer}>
          <Image
              source={profilePicture ? { uri: profilePicture } : require('../../../assets/icons/defaultDP.png')}
              style={styles.profileImage}
         /> 
            <FontAwesome name="edit" size={20} style={styles.editIcon} />
          </TouchableOpacity>

          <View style={styles.action}>
            
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textInput}
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
          </View>

          <View style={styles.action}>
            
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textInput}
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
          </View>

          <View style={styles.action}>
            
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textInput}
              value={email}
              onChangeText={text => setEmail(text)}
              editable={false}
            />
          </View>

          <View style={styles.action}>
            
            <TextInput
              placeholder="Phone No."
              keyboardType="number-pad"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textInput}
              value={phone}
              onChangeText={text => setPhone(text)}
            />
          </View>

          <View style={styles.action}>
            
            <TextInput
              placeholder="Address"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textInput}
              value={address}
              onChangeText={text => setAddress(text)}
            />
          </View>

          <View style={styles.action}>
            
            <TextInput
              placeholder="University"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textInput}
              value={university}
              onChangeText={text => setUniversity(text)}
            />
          </View>

          <TouchableOpacity style={styles.commandButton} onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditUGProfile;
