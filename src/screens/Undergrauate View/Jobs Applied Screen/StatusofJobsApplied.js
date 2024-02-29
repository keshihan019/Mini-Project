import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { JobsAppliedTab, JobsAcceptedTab, JobsPendingTab } from '../../routes/JobList';

const Tab = createMaterialTopTabNavigator();

const StatusofJobsApplied = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Jobs Applied" component={JobsAppliedTab} />
      <Tab.Screen name="Jobs Accepted" component={JobsAcceptedTab} />
      <Tab.Screen name="Jobs Pending" component={JobsPendingTab} />
    </Tab.Navigator>
  );
};

export default StatusofJobsApplied;
