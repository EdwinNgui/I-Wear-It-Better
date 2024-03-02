import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// Import images
import Sweater1 from '../assets/clothes/Sweater1.jpg';
import Cargo1 from '../assets/clothes/Cargo1.jpg';
import Shoe1 from '../assets/clothes/Shoe1.jpg';

const Profile = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={user.imageUrl} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.bio}>{user.bio}</Text>
        <Text style={styles.location}>Location: {user.location}</Text>
      </View>
      <View style={styles.carouselContainer}>
        <Text style={styles.listingHeader}>Active Listings </Text>
        <ScrollView horizontal>
          <View style={styles.listingBoxContainer}>
            <Image source={Sweater1} style={styles.listingBox} />
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>$20</Text>
            </View>
          </View>
          <View style={styles.listingBoxContainer}>
            <Image source={Cargo1} style={styles.listingBox} />
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>$30</Text>
            </View>
          </View>
          <View style={styles.listingBoxContainer}>
            <Image source={Shoe1} style={styles.listingBox} />
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>$40</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40, // Adjusted paddingTop to push content down
  },
  header: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  details: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  bio: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  location: {
    fontSize: 16,
  },
  listingHeader: {
    marginLeft: 10,
  },
  carouselContainer: {
    marginTop: 20,
    marginLeft: 5,
  },
  listingBoxContainer: {
    position: 'relative',
    margin: 10,
  },
  listingBox: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  priceTagContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    padding: 5,
  },
  priceTag: {
    color: '#fff',
    fontSize: 12,
  },
  addButton: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  addButtonText: {
    fontSize: 32,
  },
});

export default Profile;
