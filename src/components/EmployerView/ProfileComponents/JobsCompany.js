import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Alert } from 'react-native';
import microsoftLogo from '../../../assets/companyLogos/microsoftLogo.png';
import styles from './styles';

const JobsCompany = ({ navigation }) => {
  const [jobData, setJobData] = React.useState([
    {
      id: '1',
      title: 'Software Engineer',
      wages: '$100,000',
      location: 'San Francisco, CA',
      image: microsoftLogo,
    },
    {
      id: '2',
      title: 'Software Engineer',
      wages: '$100,000',
      location: 'San Francisco, CA',
      image: microsoftLogo,
    },
    // Add more job items as needed
  ]);

  const handleDelete = (itemId) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedData = jobData.filter(item => item.id !== itemId);
            setJobData(updatedData);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.SeeAllcard}>
      <Image source={item.image} style={styles.SeeAllimage} />
      <Text style={styles.SeeAlltext}>Title: {item.title}</Text>
      <Text style={styles.SeeAlltext}>Wages: {item.wages}</Text>
      <Text style={styles.SeeAlltext}>Location: {item.location}</Text>
      <TouchableOpacity
        style={styles.SeeAllapplyButton}
        onPress={() => handleDelete(item.id)}>
        <Text style={styles.DeleteBtnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.SeeAllcontainer}>
      {jobData.length > 0 ? (
        <FlatList
          data={jobData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.SeeAlllistContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>You haven't created any jobs yet. Go to the home page and click on the + icon to create.</Text>
        </View>
      )}
    </View>
  );
};

export default JobsCompany;
