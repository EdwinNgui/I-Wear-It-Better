import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import PersonIcon from "../assets/Icons/PersonIcon.svg";
import SwipeIcon from "../assets/Icons/SwipeIcon.svg";
import MessageBubbleIcon from "../assets/Icons/MessageBubble.svg";

const Footer = ({ onPageChange }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => onPageChange(1)} style={styles.button}>
        <PersonIcon width={24} height={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange(2)} style={styles.button}>
        <SwipeIcon width={24} height={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange(3)} style={styles.button}>
        <MessageBubbleIcon width={24} height={24} />
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
    borderRadius: 5,
  },
});

export default Footer;
