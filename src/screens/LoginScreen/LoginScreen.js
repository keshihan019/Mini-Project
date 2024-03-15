import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
import { storeAuthToken } from '../../authStorage/authStorage';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // State to track loading status

    useEffect(() => {
        setLoading(false); // Reset loading state when component re-renders
    }, []);

    const onFooterLinkPress = () => {
        navigation.navigate('Registration');
    }

    const onLoginPress = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Email and password cannot be empty.');
            return;
        }

        setLoading(true); // Start loading animation

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid;
                const usersRef = firebase.firestore().collection('users');
                usersRef
                    .doc(uid)
                    .get()
                    .then((firestoreDocument) => {
                        if (!firestoreDocument.exists) {
                            setLoading(false); // Stop loading animation
                            Alert.alert("Error", "User does not exist anymore.");
                            return;
                        }
                        const user = firestoreDocument.data();
                        const role = user.role;

                        const userAuthToken = response.user.getIdToken()
                        .then((token) => {
                            // Store the authentication token
                            storeAuthToken(token);

                            // Navigate based on role
                            if (role === 'Undergraduate') {
                                navigation.navigate('HomeScreen');
                            } else if (role === 'Employer') {
                                navigation.navigate('EmployerHomeScreen');
                            } else {
                                setLoading(false); // Stop loading animation
                                Alert.alert('Error', 'Invalid user type');
                            }
                        })
                        .catch((error) => {
                            setLoading(false); // Stop loading animation
                            Alert.alert('Error', 'Failed to get authentication token: ' + error.message);
                        });
                })
                .catch((error) => {
                    setLoading(false); // Stop loading animation
                    Alert.alert('Error', error.message);
                });
        })
        .catch((error) => {
            setLoading(false); // Stop loading animation
            Alert.alert('Error', 'Invalid email or password. Please try again.');
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome back!</Text>
            <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }} keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/login.png')}
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={onLoginPress}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
                {/* Loader animation */}
                {loading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#019F99" />
                    </View>
                )}
            </KeyboardAwareScrollView>
        </View>
    );
}
