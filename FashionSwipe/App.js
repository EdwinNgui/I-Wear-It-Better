import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Footer from './Components/Footer';
import Header from './Components/header';

// Import images
import Varsity1 from './assets/clothes/Varsity1.jpg';
import Varsity2 from './assets/clothes/Varsity2.jpg';
import Varsity3 from './assets/clothes/Varsity3.jpg';
import Varsity4 from './assets/clothes/Varsity4.jpg';

const users = [
  { id: 1, name: 'John', age: 25, imageUrl: Varsity1 },
  { id: 2, name: 'Emma', age: 23, imageUrl: Varsity2 },
  { id: 3, name: 'Michael', age: 27, imageUrl: Varsity3 },
  { id: 4, name: 'Sophia', age: 24, imageUrl: Varsity4 }
];

// Sample data for the inbox
const conversations = [
  { id: '1', name: 'Alice', lastMessage: 'Hey, how are you?', time: '5:00 PM', pfp: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' },
  { id: '2', name: 'Bob', lastMessage: 'See you tomorrow!', time: '4:45 PM', pfp: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg' },
  { id: '3', name: 'Charlie', lastMessage: 'Thanks for the help!', time: '3:10 PM', pfp: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg' },
  // Add more conversations as needed
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleLike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handleDislike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let pageContent;
  switch (currentPage) {
    case 1:
      pageContent = <Text>Page 1 Content</Text>;
      break;
    case 2:
      pageContent = (
        <View key={users[currentIndex].id} style={styles.card}>
          <Image source={users[currentIndex].imageUrl} style={styles.image} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{users[currentIndex].name}, {users[currentIndex].age}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity onPress={handleDislike} style={[styles.actionButton, styles.dislikeButton]}>
              <Text style={styles.actionText}>Dislike</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLike} style={[styles.actionButton, styles.likeButton]}>
              <Text style={styles.actionText}>Like</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    case 3:
      pageContent = (
      <View style={styles.containerChat}>
        <FlatList
          data={conversations}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.conversation}>
              <Image src={item.pfp} style={styles.pfp} />
              <View style={styles.conversationInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
              <Text style={styles.time}>{item.time}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
      );
      break;
    default:
      pageContent = null;
  }

  return (
    <View style={styles.container}>
      <Header onPageChange={handlePageChange} />
      <View style={styles.content}>
        <StatusBar style="auto" />
        {pageContent}
      </View>
      <Footer onPageChange={handlePageChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    width: '80%',
    height: '60%',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  userInfo: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  actionButton: {
    borderRadius: 8,
    padding: 10,
    width: '45%',
    alignItems: 'center',
  },
  dislikeButton: {
    backgroundColor: '#E64C3C',
  },
  likeButton: {
    backgroundColor: '#4CAF50',
  },
  actionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  //chat styles
  pfp: {
    width: '20%',
    height: '20%',
  },
  containerChat: {
    flex: 1,
    backgroundColor: 'white', // iMessage uses a white background for the inbox
  },
  conversation: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2', // Light grey border for each conversation item
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  conversationInfo: {
    flex: 0,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Black color for the contact name
  },
  lastMessage: {
    fontSize: 16,
    color: '#6c6c6c', // Grey color for the last message preview
  },
  time: {
    fontSize: 14,
    color: '#9a9a9a', // Light grey for the message time
  },
  
});