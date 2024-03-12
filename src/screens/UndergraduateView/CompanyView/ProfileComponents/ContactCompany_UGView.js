import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ContactCompany_UGView = () => {
  // Company contact information
  const companyEmail = 'info@microsoft.com';
  const companyAddress = 'One Microsoft Way, Redmond, WA 98052-6399, USA';
  const companyPhoneNumber = '+1 (425) 882-8080';
  const companyWebsite = 'https://www.microsoft.com';
  const socialMedia = [
    {
      platform: 'Twitter',
      url: 'https://twitter.com/Microsoft',
      icon: 'twitter',
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/Microsoft/',
      icon: 'facebook',
    },
    // Add more social media platforms as needed
  ];

  // Function to open a URL in the device's default browser
  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL: ', err));
  };

  return (
    <View style={styles.Contact_container}>
      <Text style={[styles.Contact_text, styles.header]}>Contact Information</Text>
      <Text style={styles.Contact_text}>Email: {companyEmail}</Text>
      <Text style={styles.Contact_text}>Address: {companyAddress}</Text>
      <Text style={styles.Contact_text}>Phone: {companyPhoneNumber}</Text>
      <Text
        style={[styles.Contact_text, { color: 'blue', textDecorationLine: 'underline' }]}
        onPress={() => openURL(companyWebsite)}>
        Website
      </Text>
      <Text style={[styles.Contact_text, styles.Contact_header]}>Social Media</Text>
      {socialMedia.map((platform, index) => (
        <View key={index} style={styles.Contact_iconContainer}>
          <Icon
            name={platform.icon}
            size={20}
            color="black"
            onPress={() => openURL(platform.url)}
          />
          <Text
            style={[styles.Contact_text, { marginLeft: 10, color: 'blue', textDecorationLine: 'underline' }]}
            onPress={() => openURL(platform.url)}>
            {platform.platform}
          </Text>
        </View>
      ))}
    </View>
  );
};



export default ContactCompany_UGView;
