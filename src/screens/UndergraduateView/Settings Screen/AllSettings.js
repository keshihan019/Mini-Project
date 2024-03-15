import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AccSettings from "./AccSettings";
import NotifSettings from "./NotifSettings";
import PrivSettings from "./PrivSettings";
import TermsConditions from ".//TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import SoftwareVersion from "./SoftwareVersion";
import DeveloperInfo from "./DeveloperInfo";
import FrequentlyAskedquestions from "./FrequentlyAskedQuestions";
import SettingsIcon from '../../../assets/icons/setting.png';


//Icons

import AccSettingsIcon from '../../../assets/icons/SettingsIcons/AccSettings_UG.png'
import NotificationSettingsIcon from '../../../assets/icons/SettingsIcons/NotificationSettingsIcon.png'
import PrivacySettingsIcon from '../../../assets/icons/SettingsIcons/Privacy_Settings.png'
import FAQIcon from '../../../assets/icons/SettingsIcons/FAQIcon_UG.png'
import TermsAndConditionsIcon from '../../../assets/icons/SettingsIcons/TermsAndConditions_UgIcon.png'
import PrivacyPolicyIcon from '../../../assets/icons/SettingsIcons/privacy_policy_Icon.png'
import SoftwareVersionIcon from '../../../assets/icons/SettingsIcons/swVersionIcon.png'
import DevInfoIcon from '../../../assets/icons/SettingsIcons/DeveloperInfoIcon.png'

class AllSettings extends Component {
  constructor(props) {
    super(props);
  }

  handleAccountSettings = () => {
    this.props.navigation.navigate(AccSettings);
  }

  handleNotificationSettings = () => {
    this.props.navigation.navigate(NotifSettings);
  }

  handlePrivacySettings = () => {
    this.props.navigation.navigate(PrivSettings);
  }

  handleFrequentlyAskedQuestions = () => {
    this.props.navigation.navigate(FrequentlyAskedquestions);
  }

  handleTermsConditions = () => {
    this.props.navigation.navigate(TermsConditions);
  }

  handlePrivacyPolicy = () => {
    this.props.navigation.navigate(PrivacyPolicy);
  }

  handleSoftwareVersion = () => {
    this.props.navigation.navigate(SoftwareVersion);
  }

  handleDeveloperInfo = () => {
    this.props.navigation.navigate(DeveloperInfo);
  }

  handleNavigation = (screenName) => {
    this.props.navigation.navigate(screenName);
  };

  settingsData = [
    {
      id: "1",
      title: "Account Settings",
      function: this.handleAccountSettings,
      icon: AccSettingsIcon,
      description: "Manage your account details",
    },
    {
      id: "2",
      title: "Notifications",
      function: this.handleNotificationSettings,
      icon: NotificationSettingsIcon,
      description: "Configure your notification preferences",
    },
    {
      id: "3",
      title: "Privacy",
      function: this.handlePrivacySettings,
      icon: PrivacySettingsIcon,
      description: "Adjust your privacy settings",
    },
    {
      id: "4",
      title: "FAQ",
      function: this.handleFrequentlyAskedQuestions,
      icon: FAQIcon,
      description: "View the most frequently asked questions",
    },
    {
      id: "5",
      title: "Terms and Conditions",
      function: this.handleTermsConditions,
      icon: TermsAndConditionsIcon,
      description: "Read our terms and conditions",
    },
    {
      id: "6",
      title: "Privacy Policy",
      function: this.handlePrivacyPolicy,
      icon: PrivacyPolicyIcon,
      description: "Review our privacy policy",
    },
    {
      id: "7",
      title: "Software Version",
      function: this.handleSoftwareVersion,
      icon: SoftwareVersionIcon,
      description: "Check the current software version",
    },
    {
      id: "8",
      title: "Developer Info",
      function: this.handleDeveloperInfo,
      icon: DevInfoIcon,
      description: "Learn more about the developer",
    },
  ];

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={item.function}>
      <View style={styles.settingItem}>
      <Image 
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                marginHorizontal:10,
                                marginRight:15,
                                tintColor: '#019F99'
                            }}
                        />
        <View>
          <Text style={styles.settingTitle}>{item.title}</Text>
          <Text style={styles.settingDescription}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.allSetToGo}>
        <FlatList
          data={this.settingsData}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          style={styles.settingsList}
        />
      </View>
    );
  }
}

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
    marginLeft: 10
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

export default AllSettings;
