
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'authToken';

export const storeAuthToken = async (token) => {
  try {
    if (token) {
      const tokenString = JSON.stringify(token); 
      await AsyncStorage.setItem(STORAGE_KEY, tokenString);
      console.log('Authentication token stored successfully:', tokenString);
    } else {
      console.error('Trying to store null or undefined token.');
    }
  } catch (error) {
    console.error('Error storing auth token:', error);
  }
};

export const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.log('Error getting auth token:', error);
    return null;
  }
};

export const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.log('Error removing auth token:', error);
  }
};
