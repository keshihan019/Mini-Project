import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView, ImageBackground, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MicrosoftLogo from '../../../assets/companyLogos/microsoftLogo.png';
import backgroundImage from '../../../assets/images/bg-1.png';

const { width } = Dimensions.get('window');

const Notifications = () => {
  const navigation = useNavigation()
  const [notifications, setNotifications] = useState([]);
  const animation = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    const fetchedNotifications = [
      {
        id: 1,
        title: 'Microsoft',
        state: 'Application Received',
        image: MicrosoftLogo, // Add your image path
      },
      {
        id: 2,
        title: 'Microsoft',
        state: 'Pending',
        image: MicrosoftLogo, // Add your image path
      },
      {
        id: 3,
        title: 'Microsoft',
        state: 'Not Accepted',
        image: MicrosoftLogo, // Add your image path
      },
    ];
    setNotifications(fetchedNotifications);

    if (fetchedNotifications.length === 0) {
      navigation.navigate('EmptyNotifications');
    } else {
      animateNotifications();
    }
  }, []);

  const animateNotifications = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: false,
    }).start();
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        <ScrollView style={styles.scrollview}>
          {notifications.map((notification) => (
            <Animated.View
              key={notification.id}
              style={[
                styles.notification,
                { transform: [{ translateX: animation }] },
              ]}
            >
              <View style={styles.notificationContent}>
                <Image source={notification.image} style={styles.notificationImage} />
                <View style={styles.notificationDetails}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationState}>{notification.state}</Text>
                </View>
              </View>
            </Animated.View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  scrollview: {
    padding: 16,
    marginTop: 20,
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
    marginHorizontal: 10,
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
    color: 'black',
  },
  notificationState: {
    color: 'gray',
  },
});

export default Notifications;
