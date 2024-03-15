import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';

const faqData = [
  {
    question: '1. Can we apply to jobs free of charge through UniJobs application ?',
    answer: 'Yes, the UniJobs application is completely free to use',
  },
  {
    question: '2. HOW DO I APPLY FOR A POSITION?',
    answer: 'Visit our Home page and view our current open positions. After reviewing the requirements, if your skills meet the specific requirements for one or more positions, please click “Apply for this Job” and complete all fields on the application.',
  },
  {
    question: '3. I SAW MULTIPLE POSITIONS ON WEBSITE, SHOULD I APPLY FOR ALL?',
    answer: 'Yes. Each position has a dedicated recruiter assigned to it. When you apply to a position, the recruiter is notified of your interest and will follow up with you in the event your skills match the requirements of the position.',
  },
];

export class FrequentlyAskedQuestions extends Component {
  renderFAQs() {
    return faqData.map((faq, index) => (
      <View key={index} style={styles.faqContainer}>
        <Text style={styles.FAQquestion}>{faq.question}</Text>
        <Text style={styles.FAQanswer}>{faq.answer}</Text>
      </View>
    ));
  }

  render() {
    return (
      <ScrollView style={styles.FAQcontainer}>
        {this.renderFAQs()}
      </ScrollView>
    );
  }
}



export default FrequentlyAskedQuestions;
