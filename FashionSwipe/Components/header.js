import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the Header component
const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>FashionSwipe</Text>
    </View>
  );
};

// Define styles for the header
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60, // Adjust the height as needed
    backgroundColor: '#fff', // Set your desired background color
    justifyContent: 'center',
    //alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Set border color
    elevation: 2, // Add elevation for shadow (Android)
    shadowOffset: { width: 0, height: 2 }, // Shadow settings for iOS
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerText: {
    fontSize: 20, // Set text size
    color: '#333', // Set text color
    //alignItems: 'left',
    marginLeft: 20,
  },
});

// Export the Header component
export default Header;