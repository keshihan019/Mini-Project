import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './OptionStyles';
import { firebase } from '../../firebase/config';

export default function OptionsSelection({ navigation }) {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedJob, setSelectedJob] = useState([]);

  const handleRolePress = (role) => {
    setSelectedRole((prevRole) => {
      // Unselect the other role if it was selected
      const newSelectedRole = prevRole === role ? null : role;
      return {
        selectedRole: newSelectedRole,
        // If the selected role is Employer, unselect Undergraduate (and vice versa)
        selectedJob: newSelectedRole === 'Employer' ? null : selectedJob,
      };
    });
  };

  const handleJobPress = (job) => {
    setSelectedJob((prevJob) => (job === prevJob ? null : job));
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
          onPress={() => handleRolePress('Undergraduate')}>
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
          onPress={() => handleRolePress('Employer')}>
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

        <Text style={styles.heading}>I'm looking for/hiring in</Text>

        <View style={styles.OptionContainer}>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Developer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Translator</Text>
          </TouchableOpacity>
          
          
          
        </View>
        <View style={styles.OptionContainer}>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Data Entry Operator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Typist</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.OptionContainer}>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Graphic Designer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Video Editor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.OptionContainer}>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Private Tutoring</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Other</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Job Roles</Text>
        
        <View style={styles.nextbtn}>
          
          <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.props.navigation.navigate('LogIn')}>
            <Text style={{color:'#fff', fontSize:20}}>Next</Text>
            <Image source={require('../../assets/images/login.png')} style={{width:20, height:20, marginLeft:30, marginTop:6 }} />
          </TouchableOpacity>
        </View>
        

      </View>
    );
  }
