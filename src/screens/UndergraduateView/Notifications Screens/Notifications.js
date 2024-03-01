import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView, ImageBackground } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons'; // You can replace this with your preferred icon library

export class Notifications extends Component {
  render() {
    const notifications = [
    {
      id: 1,
      title: 'Job Title 1',
      state: 'Application Received',
      // icon: 'check-circle',
    },
    {
      id: 2,
      title: 'Job Title 2',
      state: 'Pending',
      // icon: 'clock-o',
    },
    {
      id: 3,
      title: 'Job Title 3',
      state: 'Not Accepted',
      //icon: 'times-circle',
    },
    {
      id: 4,
      title: 'Job Title 1',
      state: 'Application Received',
      //icon: 'check-circle',
    },
    {
      id: 5,
      title: 'Job Title 2',
      state: 'Pending',
      //icon: 'clock-o',
    },
    {
      id: 6,
      title: 'Job Title 3',
      state: 'Not Accepted',
      //icon: 'times-circle',
    },
    // Add more notifications as needed
  ];

    return (
      <View>
        <ScrollView style={[styles.scrollview]}>
          {notifications.map((notification) => (
            <View key={notification.id} style={[styles.notification]}>
              <View style={styles.notificationContent}>
                <View style={styles.iconContainer}>
                  {/* <FontAwesome name={notification.icon} size={24} color="#000" /> */}
                </View>
                <View style={styles.notificationDetails}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationState}>{notification.state}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        {/* <ImageBackground
          style={[styles.fixed, styles.container, { zIndex: -1 }]}
          source={require('../../assets/images/bg-1.png')}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    opacity: 0.2,
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
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
  iconContainer: {
    marginRight: 16,
  },
  notificationDetails: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationState: {
    color: 'gray',
  },
});

export default Notifications;
