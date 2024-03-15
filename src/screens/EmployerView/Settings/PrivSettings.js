import React, { Component } from 'react';
import { Text, View, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';

const SamplePrivacySettingsData = [
  {
    id: '1',
    name: 'Account Visibility',
    description: 'Account is visible to all recruiters',
  },
  {
    id: '2',
    name: 'Accept Messages',
    description: 'Any recruiter can text',
  },
  {
    id: '3',
    name: 'Notify about Account Viewers',
    description: 'Notify me each time, when someone views my profile',
  },
  
];

export class PrivSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    SamplePrivacySettingsData.forEach((setting) => {
      this.state[setting.id] = false;
    });
  }

  handleSave = () => {
    // Implement your save logic here
    console.log('Settings saved:', this.state);
  };

  renderSettingItem(setting) {
    return (
      <View key={setting.id} style={styles.PrivacysettingItem}>
        <View style={styles.PrivacysettingInfo}>
          <Text style={styles.PrivacysettingName}>{setting.name}</Text>
          <Text style={styles.PrivacysettingDescription}>{setting.description}</Text>
        </View>
        <Switch
          value={this.state[setting.id]}
          onValueChange={(value) => this.setState({ [setting.id]: value })}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.Privacycontainer}>
        {SamplePrivacySettingsData.map((setting) => this.renderSettingItem(setting))}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.SaveButton} onPress={this.handleSave}>
            <Text style={styles.SaveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  SaveButton: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  SaveButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default PrivSettings;
