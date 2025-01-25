import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/globalStyles'; 

const App = () => {
    const navigation = useNavigation(); 

    // State variables to store form inputs, 
    // errors, and form validity
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {
        // Trigger form validation when name, 
        // email, or password changes
        if (name !== '' && email !== '' && password !== '' && confirmPassword !== '') {
            validateForm();
        }
    }, [name, email, password, confirmPassword]);

    const validateForm = () => {
        let errors = {};

        // Validate name field
        if (!name) {
            errors.name = 'Name is required.';
        }

        // Validate email field
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        // Validate password field
        if (!password) {
            errors.password = 'Password is required.';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }

        // Validate confirm password field
        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required.';
        } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match.';
        }

        // Set the errors and update form validity
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const handleSubmit = () => {
        validateForm();

        if (isFormValid) {
            
            // Form is valid, perform the submission logic
            console.log('Form submitted successfully!');
        } else {
            // Form is invalid, display error messages
            console.log('Form has errors. Please correct them.');
        }
    };

    return (
        <ImageBackground
            source={require('../../assets/bg.jpg')} 
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Sign Up</Text>

                    <TextInput
                        style={[
                            styles.input,
                            errors.name && { borderColor: 'red', borderWidth: 2 } // Apply red border if error
                        ]}
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />
                    {errors.name && <Text style={styles.error}>{errors.name}</Text>} {/* Display error message */}

                    <TextInput
                        style={[
                            styles.input,
                            errors.email && { borderColor: 'red', borderWidth: 2 } // Apply red border if error
                        ]}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>} {/* Display error message */}

                    <TextInput
                        style={[
                            styles.input,
                            errors.password && { borderColor: 'red', borderWidth: 2 } // Apply red border if error
                        ]}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    {errors.password && <Text style={styles.error}>{errors.password}</Text>} {/* Display error message */}

                    <TextInput
                        style={[
                            styles.input,
                            errors.confirmPassword && { borderColor: 'red', borderWidth: 2 } // Apply red border if error
                        ]}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                    {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>} {/* Display error message */}

                    <TouchableOpacity
                        style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
                        disabled={!isFormValid}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>

                    {/* Link to Log In screen */}
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>
                            Already have an account? <Text style={styles.linkText}>Log In</Text>
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ImageBackground>
    );
};

export default App;
