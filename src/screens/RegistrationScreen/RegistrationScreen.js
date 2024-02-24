import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import auth from '@react-native-firebase/auth'



 import {firebase} from '../../firebase/config.js';
 import OptionsSelection from '../OptionsSelection/OptionSelection.js';




export default function RegistrationScreen({navigation}) {
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    //const firestore = getFirestore()

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        
        if (!fullName || !email || !password || !confirmPassword ) {
            Alert.alert('Please fill in all fields.');
            return;
        }

        
        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match.');
            return;
        }

        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            
            Alert.alert('User Created', `E-mail: ${email}\nPassword: ${password}\nUsername: ${fullName}`);
            navigation.navigate('OptionsSelection')
        })
       
           
            .catch(err => {
                console.log(err);

                if (err.code === 'auth/email-already-in-use')
                Alert.alert('Registration failed. Email is already used.');
                else if (err.code === 'auth/invalid-email')
                Alert.alert('Registration failed. Invalid email.');
                else if (err.code === 'auth/weak-password')
                Alert.alert('Registration failed. Weak password.');
                else if (err.code === 'auth/network-request-failed')
                Alert.alert('Network Error', 'Please check your internet connection and try again.');


            });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/login.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}