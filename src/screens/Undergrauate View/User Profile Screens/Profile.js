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

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [nic, setNIC] = useState('12345-6789012-3');
  const [age, setAge] = useState('25');
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
          <View style={{flexDirection:'row',}}>
          <Avatar.Image 
              size={80} 
              source={{ uri: profilePicture ? profilePicture : "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"}}/>
        
            
            <View style={{marginLeft:20}}>
              <Title style={styles.title}>John Doe</Title>
              <Caption style={styles.caption}>@John_Doe</Caption>
            </View>
          <TouchableOpacity onPress={handleEditProfile}>
            <Icon name="account-edit" size={30} marginLeft={80} color="#888888"/>
          </TouchableOpacity>
          
          </View>
        </View>



          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="map-marker-radius" size={20} color="#888888"/>
              <Text style={{color:"#888888", marginLeft: 20, }}>Colombo, Sri Lanka</Text>
            </View>

            <View style={styles.row}>
              <Icon name="phone" size={20} color="#888888"/>
              <Text style={{color:"#888888", marginLeft: 20 }}>+94 715 482 488</Text>
            </View>

            <View style={styles.row}>
              <Icon name="email" size={20} color="#888888"/>
              <Text style={{color:"#888888", marginLeft: 20 }}>jonhdoe@gmail.com</Text>
            </View>

            <View style={styles.row}>
              <Icon name="human" size={20} color="#888888"/>
              <Text style={{color:"#888888", marginLeft: 20 }}>199926015426</Text>
            </View>

            <View style={styles.row}>
              <Icon name="school" size={20} color="#888888"/>
              <Text style={{color:"#888888", marginLeft: 20 }}>Sabaragamuwa University of Sri Lanka</Text>
            </View>

            
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                 <Icon name="heart-outline" color="#ff0000" size={25} marginVertical={17}/> 
                 <Text style={styles.menuItemText}>Favourites</Text>    
              </View>
            </TouchableRipple>

            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                 <Icon name="heart-outline" color="#ff0000" size={25} marginVertical={17}/> 
                 <Text style={styles.menuItemText}>Favourites</Text>    
              </View>
            </TouchableRipple>

            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                 <Icon name="heart-outline" color="#ff0000" size={25} marginVertical={17}/> 
                 <Text style={styles.menuItemText}>Favourites</Text>    
              </View>
            </TouchableRipple>

            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                 <Icon name="heart-outline" color="#ff0000" size={25} marginVertical={17}/> 
                 <Text style={styles.menuItemText}>Favourites</Text>    
              </View>
            </TouchableRipple>

            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                 <Icon name="heart-outline" color="#ff0000" size={25} marginVertical={17}/> 
                 <Text style={styles.menuItemText}>Favourites</Text>    
              </View>
            </TouchableRipple>
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
  }
});

export default Profile;
