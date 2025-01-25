import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import styles from '../styles/globalStyles'; // Import the global styles

const WelcomeScreen = () => {
    const navigation = useNavigation(); // Initialize navigation

    // Logout function using the correct syntax
    const logout = () => {
        navigation.navigate('Login'); // Navigate to the Login screen
    };

    return (
        <ImageBackground
            source={require('../../assets/bg.jpg')} 
            style={styles.background} 
        >
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text>
                        Welcome! Here’s a little about me:
                        {'\n\n'}
                        - I’ve had the wonderful opportunity to develop mobile apps using React Native, focusing on creating seamless experiences for both iOS and Android users.
                        {'\n\n'}
                        - My journey with JavaScript and TypeScript has helped me grow and understand the building blocks of React Native, especially how to keep things organized and maintainable. 
                        {'\n\n'}
                        - I genuinely love working with talented teams, learning from them, and bringing our shared ideas to life in a way that makes a real impact. 
                        {'\n\n'}
                        {'Guest'}
                        {'\n\n'}
                    </Text>
                   
                    <TouchableOpacity style={styles.button} onPress={logout}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;
