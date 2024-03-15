import React, { Component, useState } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import styles from './styles';

const AccSettingsData = [
  {
    id: '1',
    name: 'Show Profile Picture',
    description: 'Enable visibility of profile picture',
  },
  {
    id: '2',
    name: 'Stay Logged In',
    description: 'You will not sign out after exit',
  },
  
];

export class AccSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    AccSettingsData.forEach((setting) => {
      this.state[setting.id] = false;
    });
  }

  renderSettingItem(setting) {
    return (
      <View key={setting.id} style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Text style={styles.settingName}>{setting.name}</Text>
          <Text style={styles.settingDescription}>{setting.description}</Text>
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
      <View style={styles.container}>
        {AccSettingsData.map((setting) => this.renderSettingItem(setting))}
        <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.SaveButton} onPress={this.handleSave}>
          <Text style={styles.SaveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}


export default AccSettings;
