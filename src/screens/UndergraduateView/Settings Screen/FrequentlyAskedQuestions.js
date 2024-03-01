import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const faqData = [
  {
    question: '1. IS THERE A COST FOR YOUR SERVICE?',
    answer: 'UniJobs fees are paid by our employer clients in the event you are hired. UniJobs does offer Premium Career Services that are available to you, but those services are completely optional.',
  },
  {
    question: '2. HOW DO I APPLY FOR A POSITION?',
    answer: 'Visit our Home page and view our current open positions. After reviewing the requirements, if your skills meet the specific requirements for one or more positions, please click “Apply for this Job” and complete all fields on the application. If no position meets your current interest, you can Submit Resume to us for future consideration.',
  },
  {
    question: '3. I SAW MULTIPLE POSITIONS ON WEBSITE, SHOULD I APPLY FOR ALL?',
    answer: 'Yes. Each position has a dedicated recruiter assigned to it. When you apply to a position, the recruiter is notified of your interest and will follow up with you in the event your skills match the requirements of the position.',
  },
  {
    question: 'Question 4',
    answer: 'Answer to Question 4.',
  },
  {
    question: 'Question 5',
    answer: 'Answer to Question 5.',
  },
  {
    question: 'Question 6',
    answer: 'Answer to Question 6.',
  },
  {
    question: 'Question 7',
    answer: 'Answer to Question 7.',
  },
  {
    question: 'Question 8',
    answer: 'Answer to Question 8.',
  },
  {
    question: 'Question 9',
    answer: 'Answer to Question 9.',
  },
  {
    question: 'Question 10',
    answer: 'Answer to Question 10.',
  },
  {
    question: 'Question 11',
    answer: 'Answer to Question 11.',
  },
  {
    question: 'Question 12',
    answer: 'Answer to Question 12.',
  },
  {
    question: 'Question 13',
    answer: 'Answer to Question 13.',
  },
  {
    question: 'Question 14',
    answer: 'Answer to Question 14.',
  },
  {
    question: 'Question 15',
    answer: 'Answer to Question 15.',
  },
];

export class FrequentlyAskedQuestions extends Component {
  renderFAQs() {
    return faqData.map((faq, index) => (
      <View key={index} style={styles.faqContainer}>
        <Text style={styles.question}>{faq.question}</Text>
        <Text style={styles.answer}>{faq.answer}</Text>
      </View>
    ));
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderFAQs()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  faqContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  answer: {
    fontSize: 16,
    color: 'gray'
  },
});

export default FrequentlyAskedQuestions;
