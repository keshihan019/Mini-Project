import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import RightArrowicon from '../../../assets/icons/right.png';
import styles from './Style';
import { firebase } from '../../../firebase/config';

const jobs = [
  'Developer',
  'Data Entry Operator',
  'Typist',
  'Private Tutoring',
  'Translator',
  'Video Editing',
  'Graphic Designing',
  'Other',
];

const JobOption = ({ job, selectedJobs, handleJobPress }) => (
  <TouchableOpacity
    style={[
      styles.optionBtn,
      { backgroundColor: selectedJobs.includes(job) ? '#019F99' : '#fff' },
    ]}
    onPress={() => handleJobPress(job)}>
    <Text
      style={[
        styles.optionText,
        { color: selectedJobs.includes(job) ? '#fff' : '#019F99' },
      ]}>
      {job}
    </Text>
  </TouchableOpacity>
);

const JobSelection = ({ navigation }) => {
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = firebase.auth().currentUser.uid;
        const userDoc = await firebase.firestore().collection('users').doc(userId).get();
        const userData = userDoc.data();
        if (userData) {
          setUserRole(userData.role);
          setSelectedJobs(userData[userRole === 'Undergraduate' ? 'role looking' : 'role hiring'] || []);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleJobPress = (job) => {
    if (selectedJobs.includes(job)) {
      setSelectedJobs(selectedJobs.filter((item) => item !== job));
    } else {
      setSelectedJobs([...selectedJobs, job]);
    }
  };

  const onNextPress = () => {
    console.log("Selected jobs:", selectedJobs);

    const userId = firebase.auth().currentUser.uid;
    const userRef = firebase.firestore().collection('users').doc(userId);

    const jobField = userRole === 'Undergraduate' ? 'role looking' : 'role hiring';

    userRef.set({
      [jobField]: selectedJobs,
    }, { merge: true })
    .then(() => {
      console.log("Job selection saved successfully!");
      navigation.navigate('Home');
    })
    .catch((error) => {
      console.error("Error saving job selection:", error);
    });
  };

  const onClearPress = () => {
    setSelectedJobs([]); // Clear selected jobs
    const userId = firebase.auth().currentUser.uid;
    const userRef = firebase.firestore().collection('users').doc(userId);
    const jobField = userRole === 'Undergraduate' ? 'role looking' : 'role hiring';

    userRef.update({
      [jobField]: firebase.firestore.FieldValue.delete(),
    })
    .then(() => {
      console.log("Job selection cleared successfully!");
    })
    .catch((error) => {
      console.error("Error clearing job selection:", error);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>I'm looking for/hiring in</Text>

      {/* -------------------Job selection buttons----------------- */}
      
      <View style={styles.optionsContainer}>
        {/* ----------------First row of job options--------------- */}
        <View style={styles.optionRow}>
          <TouchableOpacity
            style={[
              styles.optionBtn,
              { backgroundColor: selectedJobs.includes('Developer') ? '#019F99' : '#fff' },
            ]}
            onPress={() => handleJobPress('Developer')}>
            <Text
              style={[
                styles.optionText,
                { color: selectedJobs.includes('Developer') ? '#fff' : '#019F99' },
              ]}>
              Developer
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.optionBtn,
              { backgroundColor: selectedJobs.includes('Data Entry Operator') ? '#019F99' : '#fff' },
            ]}
            onPress={() => handleJobPress('Data Entry Operator')}>
            <Text
              style={[
                styles.optionText,
                { color: selectedJobs.includes('Data Entry Operator') ? '#fff' : '#019F99' },
              ]}>
              Data Entry Operator
            </Text>
          </TouchableOpacity>
          
        </View>

        {/* ----------------Second row of job options---------------- */}
        
        <View style={styles.optionRow}>
          <TouchableOpacity
            style={[
              styles.optionBtn,
              { backgroundColor: selectedJobs.includes('Typist') ? '#019F99' : '#fff' },
            ]}
            onPress={() => handleJobPress('Typist')}>
            <Text
              style={[
                styles.optionText,
                { color: selectedJobs.includes('Typist') ? '#fff' : '#019F99' },
              ]}>
              Typist
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.optionBtn,
              { backgroundColor: selectedJobs.includes('Private Tutoring') ? '#019F99' : '#fff' },
            ]}
            onPress={() => handleJobPress('Private Tutoring')}>
            <Text
              style={[
                styles.optionText,
                { color: selectedJobs.includes('Private Tutoring') ? '#fff' : '#019F99' },
              ]}>
              Private Tutoring
            </Text>
          </TouchableOpacity>
          
          
        </View>

        {/* ----------------Third row of job options--------------- */}
        <View style={styles.optionRow}>
          
        <TouchableOpacity
            style={[
              styles.optionBtn,
              { backgroundColor: selectedJobs.includes('Translator') ? '#019F99' : '#fff' },
            ]}
            onPress={() => handleJobPress('Translator')}>
            <Text
              style={[
                styles.optionText,
                { color: selectedJobs.includes('Translator') ? '#fff' : '#019F99' },
              ]}>
              Translator
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.optionBtn,
              { backgroundColor: selectedJobs.includes('Video Editing') ? '#019F99' : '#fff' },
            ]}
            onPress={() => handleJobPress('Video Editing')}>
            <Text
              style={[
                styles.optionText,
                { color: selectedJobs.includes('Video Editing') ? '#fff' : '#019F99' },
              ]}>
              Video Editing
            </Text>
          </TouchableOpacity>
        </View>

        {/* ----------------Fourth row of job options---------------- */}
        <View style={styles.optionRow}>
        

          <TouchableOpacity
            style={[
              styles.optionBtn,
              { backgroundColor: selectedJobs.includes('Graphic Designing') ? '#019F99' : '#fff' },
            ]}
            onPress={() => handleJobPress('Graphic Designing')}>
            <Text
              style={[
                styles.optionText,
                { color: selectedJobs.includes('Graphic Designing') ? '#fff' : '#019F99' },
              ]}>
              Graphic Designing
            </Text>
          </TouchableOpacity>
              
          <TouchableOpacity
            style={[
              styles.optionBtn,
              { backgroundColor: selectedJobs.includes('Other') ? '#019F99' : '#fff' },
            ]}
            onPress={() => handleJobPress('Other')}>
            <Text
              style={[
                styles.optionText,
                { color: selectedJobs.includes('Other') ? '#fff' : '#019F99' },
              ]}>
              Other
            </Text>
          </TouchableOpacity>
        
        </View>

      </View>

      <View style={styles.buttonContainer}>
        
              
        <TouchableOpacity style={styles.clearBtn} onPress={onClearPress}>
          <Text style={styles.nextBtnText}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextBtn} onPress={onNextPress}>
          <Text style={styles.nextBtnText}>Next</Text>
          <Image source={RightArrowicon} style={styles.arrowIcon} />
        </TouchableOpacity>

       
      </View>

    </View>

  );
};


export default JobSelection;
