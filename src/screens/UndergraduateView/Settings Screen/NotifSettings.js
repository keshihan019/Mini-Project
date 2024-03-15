import React, { Component, useState } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import styles from './styles';

const SampleNotificationSettingsData = [
  {
    id: '1',
    name: 'Recent Jobs',
    description: 'Push notifications for recently added jobs',
  },
  {
    id: '2',
    name: 'Recommended Jobs',
    description: 'Push notifications for recommended jobs',
  },
  {
    id: '3',
    name: 'Job Application Status',
    description: 'Push notifications for application status',
  },

];

export class NotifSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    SampleNotificationSettingsData.forEach((setting) => {
      this.state[setting.id] = false;
    });
  }

  renderSettingItem(setting) {
    return (
      <View key={setting.id} style={styles.NotifsettingItem}>
        <View style={styles.NotifsettingInfo}>
          <Text style={styles.NotifsettingName}>{setting.name}</Text>
          <Text style={styles.NotifsettingDescription}>{setting.description}</Text>
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
      <View style={styles.Notifcontainer}>
        {SampleNotificationSettingsData.map((setting) => this.renderSettingItem(setting))}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.SaveButton} onPress={this.handleSave}>
            <Text style={styles.SaveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}



export default NotifSettings;
