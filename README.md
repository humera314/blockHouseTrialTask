# blockHouseTrialTask

# React Native App with Expo and CI/CD

This project is a React Native mobile application built using **Expo**, designed to run seamlessly on both **iOS**, **Android**, and the **Web**. It is integrated with **GitHub Actions** for Continuous Integration and Continuous Deployment (CI/CD) to automate building, testing, and deployment processes.



## Project Setup


### Clone the Repository

Clone this repository to your local machine by running:

```bash
git https://github.com/humera314/blockHouseTrialTask.git
cd blockHouseTrialTask
# Install project dependencies
npm install

# Install Expo CLI globally if it's not installed
npm install -g expo-cli

# Install React Native and Expo dependencies
npm install react-native
npm install react-navigation react-navigation-stack @react-navigation/native
npm install react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens

# Install Expo's web and metro runtime dependencies
npx expo install react-dom react-native-web @expo/metro-runtime
npx expo install react-dom react-native-web

# Install React Navigation Native dependencies (if not already installed)
npm install @react-navigation/native

# Install common dependencies such as React Native Paper and Axios
npm install react-native-paper
npm install axios

#start Server
npm run start