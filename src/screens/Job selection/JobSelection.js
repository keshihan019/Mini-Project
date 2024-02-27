import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './Style';
import firebase from '../../firebase/config';

export default function JobSelection({ navigation }) {

  const [selectedJob, setSelectedJob] = useState([]);

 

  const handleJobPress = (job) => {
    setSelectedJob((prevJob) => {
    
    if (prevJob.includes(job)) {
      return prevJob.filter((item) => item !== job);
    }
    else {
    return [...prevJob, job];
    }
  });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>I'm an</Text>


        <Text style={styles.heading}>I'm looking for/hiring in</Text>

        <View style={styles.OptionContainer}>
            
          <TouchableOpacity style={[styles.optionBtn,
          {backgroundColor: selectedJob === 'Developer' ? '#019F99' : '#fff',}]}
            onPress={() => handleJobPress('Developer')}
            disabled={selectedJob === 'Developer'}
            >  
            <Text style={[styles.optionText,
            {
              color: selectedJob === 'Developer' ? '#fff' : '#019F99',
            }
            
            ]}>Developer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionBtn,
          {backgroundColor: selectedJob === 'Translator' ? '#019F99' : '#fff',}]}
            onPress={() => handleJobPress('Translator')}
           disabled={selectedJob === 'Translator'}
            >
            <Text style={[styles.optionText,
            {
              color: selectedJob === 'Translator' ? '#fff' : '#019F99',
            }
            ]}>Translator</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.OptionContainer}>

          <TouchableOpacity style={[styles.optionBtn,
          
          {backgroundColor: selectedJob === 'Data Entry Operator' ? '#019F99' : '#fff',}]}

            onPress={() => handleJobPress('Data Entry Operator')}
            disabled={selectedJob === 'Data Entry Operator'}
            >
            <Text style={[styles.optionText,
            {
              color: selectedJob === 'Data Entry Operator' ? '#fff' : '#019F99',
            }
            ]}>Data Entry Operator</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionBtn,
          {backgroundColor: selectedJob === 'Typist' ? '#019F99' : '#fff',}]}
            onPress={() => handleJobPress('Typist')}
            disabled={selectedJob === 'Typist'}
            >
            <Text style={[styles.optionText,
            {
              color: selectedJob === 'Typist' ? '#fff' : '#019F99',
            }
            ]}>Typist</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.OptionContainer}>

          <TouchableOpacity style={[styles.optionBtn,
          {backgroundColor: selectedJob === 'Graphic Designer' ? '#019F99' : '#fff',}]}

            onPress={() => handleJobPress('Graphic Designer')}
            disabled={selectedJob === 'Graphic Designer'}
            >
            <Text style={[styles.optionText,
            {
              color: selectedJob === 'Graphic Designer' ? '#fff' : '#019F99',
            }
            ]}>Graphic Designer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionBtn,
          {backgroundColor: selectedJob === 'Video Editor' ? '#019F99' : '#fff',}]}
            onPress={() => handleJobPress('Video Editor')}
            disabled={selectedJob === 'Video Editor'}
            >
            <Text style={[styles.optionText,
            {
              color: selectedJob === 'Video Editor' ? '#fff' : '#019F99',
            }
            ]}>Video Editor</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.OptionContainer}>

          <TouchableOpacity style={[styles.optionBtn,
          {backgroundColor: selectedJob === 'Private Tutoring' ? '#019F99' : '#fff',}]}
            onPress={() => handleJobPress('Private Tutoring')}
            disabled={selectedJob === 'Private Tutoring'}
            >
            <Text style={[styles.optionText,
            {
              color: selectedJob === 'Private Tutoring' ? '#fff' : '#019F99',
            }
            ]}>Private Tutoring</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionBtn,
          {backgroundColor: selectedJob === 'Other' ? '#019F99' : '#fff',}]} 
            onPress={() => handleJobPress('Other')}
            disabled={selectedJob === 'Other'}
            >
            <Text style={[styles.optionText,
            {
              color: selectedJob === 'Other' ? '#fff' : '#019F99',
            }
            ]}>Other</Text>
          </TouchableOpacity>

        </View>

      
        
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
