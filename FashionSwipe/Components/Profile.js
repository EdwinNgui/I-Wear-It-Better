import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// Import images
import Sweater1 from '../assets/clothes/Sweater1.jpg';
import Cargo1 from '../assets/clothes/Cargo1.jpg';
import Shoe1 from '../assets/clothes/Shoe1.jpg';

const Profile = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <View style={styles.header}>
          <Image source={user.imageUrl} style={styles.image} />
        </View>
        <View style={styles.nameLocationContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.location}>{user.location}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>
      </View>

      <View style={styles.carouselContainer}>
        <Text style={styles.listingHeader}>Active Listings </Text>
        <ScrollView horizontal>
          <View style={styles.listingBoxContainer}>
            <Image source={Sweater1} style={styles.listingBox} />
          </View>
          <View style={styles.listingBoxContainer}>
            <Image source={Cargo1} style={styles.listingBox} />
          </View>
          <View style={styles.listingBoxContainer}>
            <Image source={Shoe1} style={styles.listingBox} />
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
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 10,
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
    color: '#fff',
    marginLeft: 20,
  },
  gradient: {
    backgroundColor: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 40,
  },
  details: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
  },
  bio: {
    fontSize: 18,
    marginRight: 30,
    color: '#fff',
  },
  location: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
    marginTop: 24,
  },
  listingHeader: {
    marginLeft: 15,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  carouselContainer: {
    marginTop: -10,
    borderRadius: 35,
    width: '106%',
    backgroundColor: 'white',
    paddingLeft: 15,
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
  nameLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default Profile;
