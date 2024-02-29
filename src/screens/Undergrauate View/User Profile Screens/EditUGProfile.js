import React, { Component } from 'react'
import  useState  from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';

import { SafeAreaView,ImageBackground, View, Text, Button,TextInput, ScrollView, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { Avatar,  
          Card, 
          Title,
          Caption,
          TouchableRipple, 
          Paragraph } from 'react-native-paper';


         

export class EditUGProfile extends Component {
  render() {

   
    
    return (
      <ScrollView>
      <View style={styles.container}>
        <View>
          
        </View>
        <View style={{margin:20}}>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={{}}>
              <View style={{
                height:100,
                width:100,
                borderRadius:15,
                justifyContent:'center',
                alignItems:'center'
              }}>
                <ImageBackground
                source={{uri:'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'
                }}
                style={{height:100,width:100,}}
                imageStyle={{borderRadius:15}}>
                  <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                  }}>
                    <Icon name="camera" size={35} color="#aaa" style={{
                      opacity:0.7,
                      alignItems:'center',
                      justifyContent:'center',
                      borderWidth:1,
                      borderColor:'#fff',
                      borderRadius:10
                    }}/>
                  </View>
                </ImageBackground>

              </View>
            </TouchableOpacity>
            <Text style={{marginTop:10, fontSize:18, fontWeight:'bold'}}>
              John Doe
            </Text>
          </View>
        
          <View style={styles.action}>
              <FontAwesome name='user-o' size={20}/>
              <TextInput
                placeholder='First Name'
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                />     
          </View>

          <View style={styles.action}>
              <FontAwesome name='user-o' size={20}/>
              <TextInput
                placeholder='Last Name'
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                />     
          </View>

          <View style={styles.action}>
              <FontAwesome name='envelope' size={20}/>
              <TextInput
                placeholder='Email'
                keyboardType='email-address'
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                />     
          </View>

          <View style={styles.action}>
              <FontAwesome name='phone' size={20}/>
              <TextInput
                placeholder='Phone No.'
                keyboardType='number-pad'
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                />     
          </View>

          <View style={styles.action}>
              <FontAwesome name='globe' size={20}/>
              <TextInput
                placeholder='Address'
                
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                />     
          </View>
          <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                  <Text>Submit</Text>
          </TouchableOpacity>
          
        </View>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop:50,
      flex:1,
    },
    commandButton:{
      padding:15,
      borderRadius:10,
      backgroundColor:'#FF6347',
      alignItems:'center',
      marginTop:10
    },
    panel:{
      padding:20,
      backgroundColor:'#fff',
      paddingTop:20
    },
    header:{
      backgroundColor:'#FFFFFF',
      shadowColor:'#333333',
      shadowOffset:{width:-1, height:-3},
      shadowRadius:2,
      shadowOpacity:0.4,
      paddingTop:20,
      paddingTopLeftRadius:20,
      paddingTopRightRadius:20
    },
    panelHeader:{
      alignItems:'center',
    },
    panelHandle:{
      width:40,
      height:8,
      borderRadius:4,
      backgroundColor:'#00000040',
      marginTop:10
    },
    panelTitle:{
      fontSize:27,
      height:35
    },
    panelSubtitle:{
      fontSize:14,
      color:'gray',
      height:30
    },
    panelButton:{
      padding:13,
      borderRadius:10,
      backgroundColor:'#FF6347',
      alignItems:'center',
      marginVertical:7
    },
    panelButtonTitle:{
      fontSize:17,
      fontWeight:'bold',
      color:'white',

    },
    action:{
      flexDirection:'row',
      marginVertical:20,
      marginHorizontal:40,
      borderBottomWidth:1,
      borderBottomColor:'#000',
      paddingBottom:5
    },
    actionError:{
      flexDirection:'row',
      marginTop:10,
      borderBottomColor:1,
      borderBottomColor:'#FF0000',
      paddingBottom:5
    },
    textInput:{
      flex:1,
      marginTop: -5,
      paddingLeft:10,
      color:'#05375a'
    }
  });

export default EditUGProfile