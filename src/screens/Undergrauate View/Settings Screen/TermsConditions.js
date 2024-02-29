import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export class TermsConditions extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Terms and Conditions</Text>

        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.paragraph}>
          Welcome to UniJobs! These terms and conditions outline the rules and regulations for the use of our platform.
        </Text>

        <Text style={styles.sectionTitle}>2. Acceptance of Terms</Text>
        <Text style={styles.paragraph}>
          By accessing or using UniJobs, you agree to be bound by these terms and conditions. If you disagree with any part of the terms, you may not access the platform.
        </Text>

        <Text style={styles.sectionTitle}>3. User Responsibilities</Text>
        <Text style={styles.paragraph}>
          Users are responsible for providing accurate and up-to-date information on their profiles. UniJobs is not responsible for the accuracy of user-provided data.
        </Text>

        <Text style={styles.sectionTitle}>4. Job Applications</Text>
        <Text style={styles.paragraph}>
          Users may apply for open positions through the UniJobs platform. The platform does not guarantee job placement.
        </Text>

        <Text style={styles.sectionTitle}>5. Privacy</Text>
        <Text style={styles.paragraph}>
          UniJobs respects user privacy. Please refer to our Privacy Policy for information on how we collect, use, and disclose personal information.
        </Text>

        <Text style={styles.sectionTitle}>6. Changes to Terms</Text>
        <Text style={styles.paragraph}>
          UniJobs reserves the right to modify or replace these terms at any time. Users will be notified of significant changes.
        </Text>

        <Text style={styles.sectionTitle}>7. Termination</Text>
        <Text style={styles.paragraph}>
          UniJobs may terminate or suspend access to the platform immediately, without prior notice or liability, for any reason.
        </Text>

        <Text style={styles.sectionTitle}>8. Contact Information</Text>
        <Text style={styles.paragraph}>
          For any questions about these terms and conditions, please contact us at support@unijobs.com.
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

export default TermsConditions;
