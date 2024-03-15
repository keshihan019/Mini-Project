import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import styles from './styles'

export class PrivacyPolicy extends Component {
  render() {
    return (
      <ScrollView style={styles.PrivPolicycontainer}>
        <Text style={styles.PrivPolicytitle}>Privacy Policy</Text>

        <Text style={styles.PrivPolicysectionTitle}>1. Information We Collect</Text>
        <Text style={styles.PrivPolicyparagraph}>
          UniJobs collects personal information provided by users during the registration process. This information may include, but is not limited to, name, contact details, educational background, and employment history.
        </Text>

        <Text style={styles.PrivPolicysectionTitle}>2. Use of Information</Text>
        <Text style={styles.PrivPolicyparagraph}>
          The information collected is used for the purpose of facilitating job matching, communication between users and employers, and improving the overall user experience on the UniJobs platform.
        </Text>

        <Text style={styles.PrivPolicysectionTitle}>3. Data Security</Text>
        <Text style={styles.PrivPolicyparagraph}>
          UniJobs employs industry-standard security measures to protect user data from unauthorized access, disclosure, alteration, and destruction.
        </Text>

        <Text style={styles.PrivPolicysectionTitle}>4. Sharing of Information</Text>
        <Text style={styles.PrivPolicyparagraph}>
          User information may be shared with employers for the purpose of job applications. UniJobs does not sell or share user data with third parties for marketing purposes.
        </Text>

        <Text style={styles.PrivPolicysectionTitle}>5. Changes to Privacy Policy</Text>
        <Text style={styles.PrivPolicyparagraph}>
          UniJobs reserves the right to update this privacy policy. Users will be notified of significant changes, and the latest policy will be available on the UniJobs website.
        </Text>

        <Text style={styles.PrivPolicysectionTitle}>6. Contact Information</Text>
        <Text style={[styles.PrivPolicyparagraph,{marginBottom:50}]}>
          For any questions about this privacy policy, please contact us at privacy@unijobs.com.
        </Text>
      </ScrollView>
    );
  }
}



export default PrivacyPolicy;
