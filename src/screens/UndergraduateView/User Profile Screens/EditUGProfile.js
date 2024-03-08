import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const EditUGProfile = ({ route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [university, setUniversity] = useState('');
  const [qualifications, setQualifications] = useState([]);
  const [experience, setExperience] = useState([]);

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !phone || !address) {
      alert('Please fill in all required fields');
      return;
    }
    
    route.params.onSave({
      firstName,
      lastName,
      email,
      phone,
      address,
      university,
      qualifications,
      experience
    });
    
    navigation.goBack();
  };

  const addQualification = () => {
    setQualifications([...qualifications, { name: '', duration: '', institution: '' }]);
  };

  const deleteQualification = (index) => {
    const newQualifications = [...qualifications];
    newQualifications.splice(index, 1);
    setQualifications(newQualifications);
  };

  const updateQualification = (index, data) => {
    const newQualifications = [...qualifications];
    newQualifications[index] = data;
    setQualifications(newQualifications);
  };

  const addExperience = () => {
    setExperience([...experience, { name: '', duration: '', organization: '' }]);
  };

  const deleteExperience = (index) => {
    const newExperience = [...experience];
    newExperience.splice(index, 1);
    setExperience(newExperience);
  };

  const updateExperience = (index, data) => {
    const newExperience = [...experience];
    newExperience[index] = data;
    setExperience(newExperience);
  };

  const renderQualificationItem = ({ item, index }) => (
    
    <View style={styles.qualificationItem}>
      <TextInput
        placeholder="Qualification Name"
        style={styles.input}
        value={item.name}
        onChangeText={(text) => updateQualification(index, { ...item, name: text })}
      />
      <TextInput
        placeholder="Duration"
        style={styles.input}
        value={item.duration}
        onChangeText={(text) => updateQualification(index, { ...item, duration: text })}
      />
      <TextInput
        placeholder="Institution"
        style={styles.input}
        value={item.institution}
        onChangeText={(text) => updateQualification(index, { ...item, institution: text })}
      />
      <TouchableOpacity onPress={() => deleteQualification(index)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
    
  );

  const renderExperienceItem = ({ item, index }) => (
    <View style={styles.qualificationItem}>
      <TextInput
        placeholder="Experience Name"
        style={styles.input}
        value={item.name}
        onChangeText={(text) => updateExperience(index, { ...item, name: text })}
      />
      <TextInput
        placeholder="Duration"
        style={styles.input}
        value={item.duration}
        onChangeText={(text) => updateExperience(index, { ...item, duration: text })}
      />
      <TextInput
        placeholder="Organization"
        style={styles.input}
        value={item.organization}
        onChangeText={(text) => updateExperience(index, { ...item, organization: text })}
      />
      <TouchableOpacity onPress={() => deleteExperience(index)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.scrollContainer}>
    
      <View style={styles.container}>
        <View style={styles.action}>
          <FontAwesome name='user-o' size={20} />
          <TextInput
            placeholder='First Name'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name='user-o' size={20} />
          <TextInput
            placeholder='Last Name'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name='envelope' size={20} />
          <TextInput
            placeholder='Email'
            keyboardType='email-address'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name='phone' size={20} />
          <TextInput
            placeholder='Phone No.'
            keyboardType='number-pad'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={phone}
            onChangeText={text => setPhone(text)}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name='globe' size={20} />
          <TextInput
            placeholder='Address'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={address}
            onChangeText={text => setAddress(text)}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name='globe' size={20} />
          <TextInput
            placeholder='University'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={styles.textInput}
            value={university}
            onChangeText={text => setUniversity(text)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Academic Qualifications</Text>
          <FlatList
            data={qualifications}
            renderItem={renderQualificationItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity style={styles.addButton} onPress={addQualification}>
            <Text>Add Qualification</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          <FlatList
            data={experience}
            renderItem={renderExperienceItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity style={styles.addButton} onPress={addExperience}>
            <Text>Add Experience</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
    
  );
};


export default EditUGProfile;
