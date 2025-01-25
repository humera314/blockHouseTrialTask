import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0', // Optional: Set a light background color for the entire page
    justifyContent: 'center',  // Center content if needed
    alignItems: 'center',      // Align items in the center
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // image: {
  //   width: 100, 
  //   height: 100, 
  //   marginBottom: 20,
  //   borderRadius: 50, 
  // },
  formContainer: {
    width: '150%',
    maxWidth: 700,
    backgroundColor: 'rgba(191, 232, 205, 0.9)', // Slight transparency for contrast
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 2,
    padding: 40,
    shadowColor: '#000', // Set shadow color for better contrast
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5, // Enhanced elevation for better shadow effect
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Darker color for better readability
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333', // Ensure input text is dark for better visibility
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50', // Green button for sign up/login
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  linkText: {
    color: '#1E90FF', // Bright blue for link text
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 12,
  },
});

export default styles;
