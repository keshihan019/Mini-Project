import React, { Component, useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';

const AccSettingsData = [
  {
    id: '1',
    name: 'Setting 1',
    description: 'Description for Setting 1',
  },
  {
    id: '2',
    name: 'Setting 2',
    description: 'Description for Setting 2',
  },
  {
    id: '3',
    name: 'Setting 3',
    description: 'Description for Setting 3',
  },
  {
    id: '4',
    name: 'Setting 4',
    description: 'Description for Setting 4',
  },
  {
    id: '5',
    name: 'Setting 5',
    description: 'Description for Setting 5',
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#777',
  },
});

export default AccSettings;
