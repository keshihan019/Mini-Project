import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export class PrivacyPolicy extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Privacy Policy</Text>

        <Text style={styles.sectionTitle}>1. Information We Collect</Text>
        <Text style={styles.paragraph}>
          UniJobs collects personal information provided by users during the registration process. This information may include, but is not limited to, name, contact details, educational background, and employment history.
        </Text>

        <Text style={styles.sectionTitle}>2. Use of Information</Text>
        <Text style={styles.paragraph}>
          The information collected is used for the purpose of facilitating job matching, communication between users and employers, and improving the overall user experience on the UniJobs platform.
        </Text>

        <Text style={styles.sectionTitle}>3. Data Security</Text>
        <Text style={styles.paragraph}>
          UniJobs employs industry-standard security measures to protect user data from unauthorized access, disclosure, alteration, and destruction.
        </Text>

        <Text style={styles.sectionTitle}>4. Sharing of Information</Text>
        <Text style={styles.paragraph}>
          User information may be shared with employers for the purpose of job applications. UniJobs does not sell or share user data with third parties for marketing purposes.
        </Text>

        <Text style={styles.sectionTitle}>5. Cookies</Text>
        <Text style={styles.paragraph}>
          UniJobs uses cookies to enhance the user experience. Users may choose to disable cookies in their browser settings, but this may affect the functionality of the platform.
        </Text>

        <Text style={styles.sectionTitle}>6. Changes to Privacy Policy</Text>
        <Text style={styles.paragraph}>
          UniJobs reserves the right to update this privacy policy. Users will be notified of significant changes, and the latest policy will be available on the UniJobs website.
        </Text>

        <Text style={styles.sectionTitle}>7. Contact Information</Text>
        <Text style={styles.paragraph}>
          For any questions about this privacy policy, please contact us at privacy@unijobs.com.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default PrivacyPolicy;
