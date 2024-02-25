import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './OptionStyles';
import { firebase } from '../../firebase/config';

export default function OptionsSelection({ navigation }) {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedJob, setSelectedJob] = useState('');

  const userID = firebase.auth().currentUser.uid;

  const handleRolePress = (role) => {
    // If Undergraduate is selected, prevent selecting Employer
    if (role === 'Undergraduate') {
      setSelectedRole('Undergraduate');
      setSelectedJob(''); // Reset selected job
      const data = {
        id: userID,
      };
      const usersRef = firebase.firestore().collection('Undergraduate');
      usersRef
        .doc(userID)
        .set(data)
        .then(() => {
          // Success handling
        })
        .catch((error) => {
          alert(error);
        });
    } else if (role === 'Employer') {
      // If Employer is selected, prevent selecting Undergraduate
      setSelectedRole('Employer');
      setSelectedJob(''); // Reset selected job
      const data = {
        id: userID,
      };
      const usersRef = firebase.firestore().collection('Employer');
      usersRef
        .doc(userID)
        .set(data)
        .then(() => {
          // Success handling
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const handleJobPress = (job) => {
    setSelectedJob(job);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>I'm an</Text>

      <View style={styles.RoleContainer}>
        <TouchableOpacity
          style={[
            styles.optionBtn,
            {
              backgroundColor:
                selectedRole === 'Undergraduate' ? '#019F99' : '#fff',
            },
          ]}
          onPress={() => handleRolePress('Undergraduate')}
          disabled={selectedRole === 'Undergraduate'}>
          <Text
            style={[
              styles.optionText,
              {
                color:
                  selectedRole === 'Undergraduate' ? '#fff' : '#019F99',
              },
            ]}>
            Undergraduate
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionBtn,
            {
              backgroundColor:
                selectedRole === 'Employer' ? '#019F99' : '#fff',
            },
          ]}
          onPress={() => handleRolePress('Employer')}
          disabled={selectedRole === 'Employer'}>
          <Text
            style={[
              styles.optionText,
              {
                color: selectedRole === 'Employer' ? '#fff' : '#019F99',
              },
            ]}>
            Employer
          </Text>
        </TouchableOpacity>
      </View>

      <Image
            source={require('../../assets/images/login.png')}
            style={styles.logo}
          />

       

      <View style={styles.nextbtn}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('LogIn')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Next</Text>
          
        </TouchableOpacity>
        
      </View>
     
    </View>
  );
}
