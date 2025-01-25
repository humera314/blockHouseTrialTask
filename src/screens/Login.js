import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/globalStyles'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Reset error messages before validation
    setEmailError('');
    setPasswordError('');

    // Basic form validation
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return;
    }

    // Check if password meets minimum length (e.g., 6 characters)
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    // Simulate login success
    Alert.alert('Success', 'Logged in successfully!');
    
    // After successful login, navigate to the Welcome screen or your desired screen
    navigation.navigate('Welcome');
  };

  return (
    <ImageBackground
      // eslint-disable-next-line no-undef
      source={require('../../assets/bg.jpg')} 
      style={styles.background} 
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Log in</Text>

          {/* Email Input with error feedback */}
          <TextInput
            style={[styles.input, emailError ? { borderColor: 'red', borderWidth: 2 } : null]}
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
          />
          {emailError && <Text style={styles.error}>{emailError}</Text>} {/* Display error below email */}

          {/* Password Input with error feedback */}
          <TextInput
            style={[styles.input, passwordError ? { borderColor: 'red', borderWidth: 2 } : null]}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {passwordError && <Text style={styles.error}>{passwordError}</Text>} {/* Display error below password */}

          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.link}>
                Do not have an account? <Text style={styles.linkText}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </ImageBackground>
  );
}







