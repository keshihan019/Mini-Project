import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SuccessIcon from '../../../assets/icons/successTick.png'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const SuccessfullyApplied = () => {
  const navigation = useNavigation();

  const handleBackToHome = () => {
    // Handle submission logic
    navigation.navigate('Home');
  };
  return (
    <>
      <View style={styles.Success_container}>
      <Image
        source={require('../../../assets/icons/successTick.png')}
        style={styles.Top_image}
        resizeMode="contain"
      />
      <Text style={styles.Success_Text}>You are set to go</Text>

        <View style={styles.SuccessImg_container}>
          <Image source={SuccessIcon} style={styles.Success_image}/>
          
          
        </View>
      
        <Text style={styles.succesText}>You have successfully submitted your application!!</Text>
        <TouchableOpacity onPress={handleBackToHome}>
          <Text style={styles.homebtn}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default SuccessfullyApplied
