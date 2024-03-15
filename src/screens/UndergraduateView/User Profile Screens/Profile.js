import React, { useState } from 'react';
import EditUGProfile from './EditUGProfile';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, Dimensions,ImageBackground, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Avatar, Caption, Title } from 'react-native-paper';
import styles from './styles';
import backgroundImage from '../../../assets/images/bg-1.png';
import EditProfileIcon from '../../../assets/icons/Editprofile.png';
import AddressIcon from '../../../assets/icons/UGprofile/Address.png'
import EmailIcon from '../../../assets/icons/UGprofile/email.png'
import MobileIcon from '../../../assets/icons/UGprofile/MobileNumber.png'
import UniversityIcon from '../../../assets/icons/UGprofile/university.png'

const Profile = () => {
  const [name, setName] = useState('Add your name');
  const [address, setAddress] = useState('Add your Address');
  const [phone, setPhone] = useState('Add your Contact Number');
  const [email, setEmail] = useState('Add your Email');
  const [university, setUniversity] = useState('Add your University');
  const [profilePicture, setProfilePicture] = useState(null);
  const [qualifications, setQualifications] = useState([]);
  const [experience, setExperience] = useState([]);

  const navigation = useNavigation();
  const { width } = Dimensions.get('window');

  const handleEditProfile = () => {
    navigation.navigate('EditUGProfile', {
      onSave: (data) => {
        setName(`${data.firstName} ${data.lastName}`)
        setAddress(`${data.address}`)
        setPhone(`${data.phone}`)
        setEmail(`${data.email}`)
        setUniversity(`${data.university}`)
      },
    });
  };

  const handleEditQualifications = () => {
    navigation.navigate('EditAcademicQualifications', {
      onSave: (data) => {
        // Update qualifications state with the edited data
      },
    });
  };

  const handleEditExperience = () => {
    navigation.navigate('EditWorkExp', {
      onSave: (data) => {
        // Update experience state with the edited data
      },
    });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
    <SafeAreaView style={styles.container}>
      
      <View style={styles.overlay}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:20 }}>
          <Avatar.Image 
            size={80} 
            source={{ uri: profilePicture ? profilePicture : "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"}}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={styles.title}>{name}</Title>
          </View>
        </View>

        <TouchableOpacity 
          onPress={handleEditProfile} 
          style={styles.editProfileButton}
        >
          <Image 
            source={EditProfileIcon}
            resizeMode="contain"
            style={styles.editProfileIcon}
          />
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Image 
            source={AddressIcon}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.infoText}>{address}</Text>
        </View>

        <View style={styles.row}>
          <Image 
            source={MobileIcon}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.infoText}>{phone}</Text>
        </View>

        <View style={styles.row}>
          <Image 
            source={EmailIcon}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.infoText}>{email}</Text>
        </View>

        <View style={styles.row}>
          <Image 
            source={UniversityIcon}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.infoText}>{university}</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <View style={styles.skillBox}>
          <Text style={styles.skillTitle}>Academic Qualifications</Text>
            
          {qualifications.length === 0 ? (
            <Text style={styles.emptyMessage}>Add your academic qualifications</Text>
          ) : (
            qualifications.map((qualification, index) => (
              <View key={index} style={styles.skillItem}>
                <Text>{qualification.name}</Text>
                <Text>{qualification.duration}</Text>
                <Text>{qualification.institution}</Text>
                
              </View>
            ))
          )}

          {/* Edit/Add Button */}
            <TouchableOpacity style={styles.editQualificationsButton} onPress={handleEditQualifications}>
              <Text style={styles.editProfileText}>Edit/Add</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.skillBox}>
          <Text style={styles.skillTitle}>Work Experience</Text>
          {experience.length === 0 ? (
            <Text style={styles.emptyMessage}>Add your work experience</Text>
          ) : (
            experience.map((exp, index) => (
              <View key={index} style={styles.skillItem}>
                <Text>{exp.name}</Text>
                <Text>{exp.duration}</Text>
                <Text>{exp.organization}</Text>
              </View>
            ))
          )}
          {/* Edit/Add Button */}
          <TouchableOpacity style={styles.editQualificationsButton} onPress={handleEditExperience}>
              <Text style={styles.editProfileText}>Edit/Add</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
 
    </SafeAreaView>
    </ImageBackground>
  );
};



export default Profile;
