import * as React from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // You can replace this with your preferred icon library
import { useNavigation } from '@react-navigation/native';
import AccSettings from "./AccSettings";
import NotifSettings from "./NotifSettings";
import PrivSettings from "./PrivSettings";
import TermsConditions from ".//TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import SoftwareVersion from "./SoftwareVersion";
import DeveloperInfo from "./DeveloperInfo";
import FrequentlyAskedquestions from "./FrequentlyAskedQuestions";

const Settings = () => {

  const navigation = useNavigation();

  const handleAccountSettings = () =>{
    navigation.navigate(AccSettings)
  }

  const handleNotificationSettings = () =>{
    navigation.navigate(NotifSettings)
  }

  const handlePrivacySettings = () =>{
    navigation.navigate(PrivSettings)
  }

  const handleFrequentlyAskedQuestions = () =>{
    navigation.navigate(FrequentlyAskedquestions)
  }

  const handleTermsConditions = () =>{
    navigation.navigate(TermsConditions)
  }

  const handlePrivacyPolicy = () =>{
    navigation.navigate(PrivacyPolicy)
  }

  const handleSoftwareVersion = () =>{
    navigation.navigate(SoftwareVersion)
  }

  const handleDeveloperInfo = () =>{
    navigation.navigate(DeveloperInfo)
  }

  
  
  const settingsData = [
    {
      id: "1",
      title: "Account Settings",
      function:handleAccountSettings,
      icon: "cogs",
      description: "Manage your account details",
    },
    {
      id: "2",
      title: "Notifications",
      function:handleNotificationSettings,
      icon: "bell",
      description: "Configure your notification preferences",
    },
    {
      id: "3",
      title: "Privacy",
      function:handlePrivacySettings,
      icon: "lock",
      description: "Adjust your privacy settings",
    },
    {
      id: "4",
      title: "FAQ",
      function:handleFrequentlyAskedQuestions,
      icon: "question",
      description: "View the most frequently asked questions",
    },
    {
      id: "5",
      title: "Terms and Conditions",
      function:handleTermsConditions,
      icon: "file-text",
      description: "Read our terms and conditions",
    },
    {
      id: "6",
      title: "Privacy Policy",
      function:handlePrivacyPolicy,
      icon: "shield",
      description: "Review our privacy policy",
    },
    {
      id: "7",
      title: "Software Version",
      function:handleSoftwareVersion,
      icon: "code",
      description: "Check the current software version",
    },
    {
      id: "8",
      title: "Developer Info",
      function:handleDeveloperInfo,
      icon: "user",
      description: "Learn more about the developer",
    },
    
    
  ];


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={item.function}>
    <View style={styles.settingItem}>
      <FontAwesome name={item.icon} size={24} color="#019f99" style={styles.settingIcon} />
      <View>
        <Text style={styles.settingTitle}>{item.title}</Text>
        <Text style={styles.settingDescription}>{item.description}</Text>
      </View>

      
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.allSetToGo}>
      
      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.settingsList}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingIcon: {
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  settingDescription: {
    color: '#777',
  },
  settingsList: {
    marginTop: 10, 
  },
  allSetToGo: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Settings;
