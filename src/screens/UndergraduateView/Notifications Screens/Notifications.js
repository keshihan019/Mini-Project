import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MicrosoftLogo from '../../../assets/companyLogos/microsoftLogo.png'

const Notifications = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications or set them from a source
    //Types of Notifications

    // 1. job posting
    // 2. 
    const fetchedNotifications = [
      {
        id: 1,
        title: 'Microsoft',
        state: 'Application Received',
        // icon: 'check-circle',
        image: MicrosoftLogo, // Add your image path
      },
      {
        id: 2,
        title: 'Microsoft',
        state: 'Pending',
        // icon: 'clock-o',
        image: MicrosoftLogo, // Add your image path
      },
      {
        id: 3,
        title: 'Microsoft',
        state: 'Not Accepted',
        //icon: 'times-circle',
        image: MicrosoftLogo, // Add your image path
      },
    ];
    setNotifications(fetchedNotifications);

    // Check if notifications array is empty
    if (fetchedNotifications.length === 0) {
      navigation.navigate('EmptyNotifications');
    }
  }, []);

  return (
    <View>
      <ScrollView style={styles.scrollview}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notification}>
            <View style={styles.notificationContent}>
              <Image source={notification.image} style={styles.notificationImage} />
              <View style={styles.notificationDetails}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.notificationState}>{notification.state}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: 'transparent',
    padding: 16,
  },
  notification: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  notificationImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  notificationDetails: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  notificationState: {
    color: 'gray',
  },
});

export default Notifications;
