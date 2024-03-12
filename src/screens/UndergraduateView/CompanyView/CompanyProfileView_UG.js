import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutCompany_UGView from './ProfileComponents/AboutCompany_UGView';
import ContactCompany_UGView from './ProfileComponents/ContactCompany_UGView';
import JobsCompany_UGView from './ProfileComponents/JobsCompany_UGView';

const Tab = createMaterialTopTabNavigator();

const CompanyProfileView_UG = () => {
  return (
    <View style={styles.container}>
      {/* Cover Image */}
      <Image source={require('../../../assets/companyCover/company_cover.jpg')} style={styles.coverImage} resizeMode="cover" />

      {/* Profile Image (Logo) */}
      <View style={styles.profileImageContainer}>
        <Image source={require('../../../assets/companyLogos/microsoftLogo.png')} style={styles.profileImage} />
      </View>

      {/* Tabs */}
      <Tab.Navigator
        screenOptions={{
          labelStyle: styles.tab,
          indicatorStyle: { backgroundColor: 'blue' }, // Customize indicator color
        }}>
        <Tab.Screen name="About Us" component={AboutCompany_UGView} />
        <Tab.Screen name="Jobs" component={JobsCompany_UGView} />
        <Tab.Screen name="Contact Us" component={ContactCompany_UGView} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  coverImage: {
    width: '100%',
    height: 150,
    marginBottom:50 
  },
  profileImageContainer: {
    position: 'absolute',
    top: 100, 
    right: 20,
    zIndex: 1, 
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Make it a circle
  },
  tab: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 40,
  },
});

export default CompanyProfileView_UG;
