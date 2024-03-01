import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import RightArrowicon from '../../../assets/icons/right.png'
import styles from './Style';

const JobSelection = ({ navigation }) => {
  const [selectedJobs, setSelectedJobs] = useState([]);

  const handleJobPress = (job) => {
    if (selectedJobs.includes(job)) {
      setSelectedJobs(selectedJobs.filter((item) => item !== job));
    } else {
      setSelectedJobs([...selectedJobs, job]);
    }
  };

  const onNextPress = () => {
    console.log("Selected jobs:", selectedJobs);
    
    navigation.navigate('LogIn');
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

      {/* Next button */}
      <TouchableOpacity style={styles.nextBtn} onPress={onNextPress}>
        <Text style={styles.nextBtnText}>Next</Text>
        <Image source={RightArrowicon} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};


export default JobSelection;
