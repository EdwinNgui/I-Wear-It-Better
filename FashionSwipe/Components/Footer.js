import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Footer = ({ onPageChange }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => onPageChange(1)} style={styles.button}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange(2)} style={styles.button}>
        <Text style={styles.buttonText}>Swipe</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange(3)} style={styles.button}>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Footer;
