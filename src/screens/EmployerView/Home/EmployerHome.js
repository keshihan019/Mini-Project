import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,Dimensions, ImageBackground } from 'react-native';
import PlusIcon from '../../../assets/icons/add.png';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backgroundImage from '../../../assets/images/bg-1.png';

const { width } = Dimensions.get('window');

const EmployerHome = () => {
  const [totalApplicants, setTotalApplicants] = useState(200);
  const [acceptedApplicants, setAcceptedApplicants] = useState(90);
  const [rejectedApplicants, setRejectedApplicants] = useState(50);
  const [totalJobsCreated, setTotalJobsCreated] = useState(89);

  const navigation = useNavigation();

  const handleCreateJob = () => {
    navigation.navigate('CreateJob');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
    <View style={styles.container}>
      <Text style={styles.heading}>My Dashboard</Text>
      <View style={styles.gridContainer}>

        <Card
          style={styles.totalCard} // Custom style for Total Applicants card
          title="Total Applicants"
          value={totalApplicants}
          setValue={setTotalApplicants}
        />
        <Card
          style={styles.acceptedCard} // Custom style for Accepted Applicants card
          title="Accepted"
          value={acceptedApplicants}
          setValue={setAcceptedApplicants}
        />
        <Card
          style={styles.rejectedCard} // Custom style for Rejected Applicants card
          title="Rejected"
          value={rejectedApplicants}
          setValue={setRejectedApplicants}
        />
        <Card
          style={styles.createdCard} // Custom style for Total Jobs Created card
          title="Jobs Created"
          value={totalJobsCreated}
          setValue={setTotalJobsCreated}
        />
      </View>
      
      <TouchableOpacity style={styles.floatingButton} onPress={handleCreateJob}>
        <Image source={PlusIcon} style={styles.plusIcon} />
      </TouchableOpacity>
    </View>
    </View>
    </ImageBackground>
  );
};

const Card = ({ title, value, setValue, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <AnimatedCircularProgress
        size={50}
        width={3}
        fill={value}
        tintColor="#019F99"
        backgroundColor="#ffe">
        {fill => (
          <Text style={styles.innerText}>{fill.toFixed(0)}</Text> 
        )}
      </AnimatedCircularProgress>
    </View>
  );
};




export default EmployerHome;
