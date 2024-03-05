import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SuccessIcon from '../../../assets/icons/success.png'

const SuccessfullyApplied = () => {
  return (
    <>
      
      <Image source={SuccessIcon}/>

      <TouchableOpacity>
        <Text>Back to home</Text>
      </TouchableOpacity>
    </>
  )
}

export default SuccessfullyApplied