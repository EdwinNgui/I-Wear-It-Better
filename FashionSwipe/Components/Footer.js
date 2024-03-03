import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import PersonIcon from "../assets/Icons/PersonIcon.png";
import MessageBubble from "../assets/Icons/MessageBubble.png";
import SwipeIcon from "../assets/Icons/SwipeIcon.png";

const Footer = ({ onPageChange }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => onPageChange(1)} style={styles.button}>
        <Image source={PersonIcon} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange(2)} style={styles.button}>
        <Image source={SwipeIcon} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange(3)} style={styles.button}>
        <Image source={MessageBubble} style={{ width: 24, height: 24 }} />
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
    borderRadius: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#BFD7EA',
    borderRadius: 5,
  },
});

export default Footer;
