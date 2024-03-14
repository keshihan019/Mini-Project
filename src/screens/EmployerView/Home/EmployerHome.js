import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PlusIcon from '../../../assets/icons/add.png';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';


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
    <View style={styles.container}>
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
        tintColor="#00e0ff"
        backgroundColor="#ffe">
        {fill => (
          <Text style={styles.innerText}>{fill.toFixed(0)}</Text> 
        )}
      </AnimatedCircularProgress>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    padding: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Adjust according to your preference
    height: 200, // Adjust according to your preference
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
    textAlign: 'center',
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3498db',
    position: 'absolute',
    bottom: 80,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  plusIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  innerText: {
    color: 'black',
  },
  // Custom styles for each card
  totalCard: {
    borderColor: '#000', 
    borderWidth:2// Border color becomes background color
  },
  acceptedCard: {
    borderColor: 'green',
    borderWidth:2 // Border color becomes background color
  },
  rejectedCard: {
    borderColor: 'red',
    borderWidth:2 // Border color becomes background color
  },
  createdCard: {
    borderColor: 'blue',
    borderWidth:2 // Border color becomes background color
  },
});

export default EmployerHome;
