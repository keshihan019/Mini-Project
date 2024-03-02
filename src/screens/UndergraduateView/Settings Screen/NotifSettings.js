import React, { Component, useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';

const SampleNotificationSettingsData = [
  {
    id: '1',
    name: 'Notification 1',
    description: 'Description for Notification 1',
  },
  {
    id: '2',
    name: 'Notification 2',
    description: 'Description for Notification 2',
  },
  {
    id: '3',
    name: 'Notification 3',
    description: 'Description for Notification 3',
  },
  {
    id: '4',
    name: 'Notification 4',
    description: 'Description for Notification 4',
  },
  {
    id: '5',
    name: 'Notification 5',
    description: 'Description for Notification 5',
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
        {SampleNotificationSettingsData.map((setting) => this.renderSettingItem(setting))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingName: {
    color:'#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#777',
  },
});

export default NotifSettings;
