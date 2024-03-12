// AboutCompany.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles'; // Import styles from the separate stylesheet

const AboutCompany = () => {
  const microsoftDescription = "Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its mission is to empower every person and every organization on the planet to achieve more.";
  
  const mission = "Microsoft's mission is to empower every person and every organization on the planet to achieve more.";

  const vision = "Microsoft's vision is to create innovative technology solutions that enable people and organizations to realize their full potential.";

  const handleEdit = () => {
    
    console.log("Edit button clicked");
  };

  return (
    <View style={styles.AboutCompanycontainer}>
      <View style={styles.AboutCompanysection}>
        <Text style={styles.AboutCompanysectionTitle}>About Us</Text>
        <Text style={styles.data}>{microsoftDescription}</Text>
      </View>
      <View style={styles.AboutCompanysection}>
        <Text style={styles.AboutCompanysectionTitle}>Mission</Text>
        <Text style={styles.data}>{mission}</Text>
      </View>
      <View style={styles.AboutCompanysection}>
        <Text style={styles.AboutCompanysectionTitle}>Vision</Text>
        <Text style={styles.data}>{vision}</Text>
      </View>
      <Button title="Edit" onPress={handleEdit} />
    </View>
  );
};

export default AboutCompany;
