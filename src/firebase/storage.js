
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeCredentials = async (credentials) => {
    try {
        await AsyncStorage.setItem('credentials', JSON.stringify(credentials));
    } catch (error) {
        console.error('Error storing credentials:', error);
    }
};

export const retrieveCredentials = async () => {
    try {
        const credentials = await AsyncStorage.getItem('credentials');
        return credentials !== null ? JSON.parse(credentials) : null;
    } catch (error) {
        console.error('Error retrieving credentials:', error);
        return null;
    }
};

export const clearCredentials = async () => {
    try {
        await AsyncStorage.removeItem('credentials');
    } catch (error) {
        console.error('Error clearing credentials:', error);
    }
};
