import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import matchImage from '../assets/match.png'

const { width, height } = Dimensions.get('window');

const Match = () => {
    // State to control visibility
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Set a timeout to hide the overlay after 2 seconds
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        // Cleanup the timer when the component unmounts or rerenders
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this runs once on mount

    if (!visible) {
        return null; // Don't render anything if not visible
    }

    return (
        <View style={styles.overlay}>
            <Image source={matchImage} style={styles.matchImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        width: width,
        height: height,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //justifyContent: 'center',
        //alignItems: 'center',
        zIndex: 1000, // Ensure it covers other components
    },
    matchImage: {
        width: 340,
        height: 340,
        borderRadius: 60, // Makes it circular
    },
    matchText: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Match;