import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Logo from '../assets/logo.png';

// Define the Header component
const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={Logo} style={styles.logo}/>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

// Define styles for the header
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    width: '100%',
    height: 60, // Adjust the height as needed
    backgroundColor: '#fff', // Set your desired background color
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Set border color
    elevation: 2, // Add elevation for shadow (Android)
    shadowOffset: { width: 0, height: 2 }, // Shadow settings for iOS
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingLeft: 20, // Add padding to the left of the container
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 20, 
  },
  headerText: {
    fontSize: 20, // Set text size
    color: '#333', // Set text color
  },
});

// Export the Header component
export default Header;
