import React, { useState } from 'react';
import EditUGProfile from './EditUGProfile';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, Text, Button,TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Avatar,  
          Card, 
          Title,
          Caption,
          TouchableRipple, 
          Paragraph } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import EditProfileIcon from '../../../assets/icons/Editprofile.png';
import AddressIcon from '../../../assets/icons/UGprofile/Address.png'
import EmailIcon from '../../../assets/icons/UGprofile/email.png'
import MobileIcon from '../../../assets/icons/UGprofile/MobileNumber.png'
import UniversityIcon from '../../../assets/icons/UGprofile/university.png'

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [address, setAddress] = useState('123 Main Street, City');
  const [qualifications, setQualifications] = useState([]);
  const [experience, setExperience] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSave = () => {
    console.log('Profile Saved!');
  };

  const handleAddQualification = () => {
    setQualifications([...qualifications, 'New Qualification']);
  };

  const handleAddExperience = () => {
    setExperience([...experience, 'New Work Experience']);
  };

  const handleDeleteQualification = (index) => {
    const updatedQualifications = [...qualifications];
    updatedQualifications.splice(index, 1);
    setQualifications(updatedQualifications);
  };

  const handleDeleteExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };


  const navigation = useNavigation();

  const handleEditProfile = () =>{
    navigation.navigate(EditUGProfile)
  }

  return (
   
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Avatar.Image 
      size={80} 
      source={{ uri: profilePicture ? profilePicture : "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"}}
    />
    <View style={{ marginLeft: 20 }}>
      <Title style={styles.title}>John Doe</Title>
      <Caption style={styles.caption}>@John_Doe</Caption>
    </View>
  </View>

  <TouchableOpacity 
  onPress={handleEditProfile} 
  style={{
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 30, 
    backgroundColor: '#019F99', 
    width: 160, 
    paddingVertical: 10, 
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5 // for Android
  }}
>
  <Image 
    source={EditProfileIcon}
    resizeMode="contain"
    style={{
      width: 25,
      height: 25,
      tintColor: 'white', 
      marginLeft: 20,
    }}
  />
  <Text style={{ marginLeft: 10, color: 'white' }}>Edit Profile</Text>
</TouchableOpacity>
</View>







          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Image 
                  source={AddressIcon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: '#019F99', 
                    marginLeft: 20,
                  }}
                />
              <Text style={{color:"#888888", marginLeft: 20, }}>Colombo, Sri Lanka</Text>
            </View>

            <View style={styles.row}>
              <Image 
                  source={MobileIcon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: '#019F99', 
                    marginLeft: 20,
                  }}
                />
              <Text style={{color:"#888888", marginLeft: 20, }}>0714 588 964</Text>
            </View>

            <View style={styles.row}>
              <Image 
                  source={EmailIcon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: '#019F99', 
                    marginLeft: 20,
                  }}
                />
              <Text style={{color:"#888888", marginLeft: 20, }}>Johndoe@gmail.com</Text>
            </View>

            <View style={styles.row}>
              <Image 
                  source={UniversityIcon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: '#019F99', 
                    marginLeft: 20,
                  }}
                />
              <Text style={{color:"#888888", marginLeft: 20, }}>Sabaragamuwa University of Sri Lanka</Text>
            </View>



            
          </View>

          <View style={styles.menuWrapper}>
          <View style={styles.skillBox}>
    <Text style={styles.skillTitle}>Academic Qualifications</Text>

    <View style={styles.skillItem}>
        <Text style={{color:'black'}}>CIMA</Text>
        <Text style={{color:'black'}}>2020-2022</Text>
        <Text style={{color:'black'}}>Name of Institution</Text>
    </View>

    <View style={styles.skillItem}>
        <Text style={{color:'black'}}>CIMA</Text>
        <Text style={{color:'black'}}>2020-2022</Text>
        <Text style={{color:'black'}}>Name of Institution</Text>
    </View>
          </View>



          <View style={styles.skillBox}>
    <Text style={styles.skillTitle}>Work Experience</Text>

    <View style={styles.skillItem}>
        <Text style={{color:'black'}}>CIMA</Text>
        <Text style={{color:'black'}}>2020-2022</Text>
        <Text style={{color:'black'}}>Name of Institution</Text>
    </View>

    <View style={styles.skillItem}>
        <Text style={{color:'black'}}>CIMA</Text>
        <Text style={{color:'black'}}>2020-2022</Text>
        <Text style={{color:'black'}}>Name of Institution</Text>
    </View>
          </View>
          </View>
        
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:20
  },
  userInfoSection: {
    paddingHorizontal:30,
    marginBottom:25
  },
  title: {
    fontSize:24,
    fontWeight:'bold',
    marginTop:14
  },
  caption: {
    fontSize:14,
    lineHeight:14,
    fontWeight:'500',
  },
  row:{
    flexDirection:'row',
    marginBottom:10
  },
  infoBoxWrapper:{
    borderBottomColor:'#dddddd',
    borderBottomWidth:1,
    borderTopColor:'#dddddd',
    borderTopWidth:1,
    flexDirection:'row',
    height:100,
  },
  infoBox:{
    width:'50%',
    alignItems:'center',
    justifyContent:'center'
  },
  menuWrapper:{
    marginTop:10
  },
  menuItem:{
    flexDirection:'row',
    paddingVertical:15,
    paddingHorizontal:30
  },
  menuItemText:{
    color:'#777777',
    marginLeft: 20,
    marginVertical:15,
    fontWeight:'600',
    fontSize:16,
    lineHeight:26,
  },
  skillBox:{
    backgroundColor:'white',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    
  },
  skillTitle:{
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    padding:10,
    
  },
  skillItem:{
    marginVertical:10,
    paddingHorizontal:15
  }
});

export default Profile;
