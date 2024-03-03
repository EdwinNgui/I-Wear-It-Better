import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// Imports the sections
import Footer from './Components/Footer';
import Header from './Components/header';
import Profile from './Components/Profile';

// Import images
import Varsity1 from './assets/clothes/Varsity1.jpg';
import Varsity2 from './assets/clothes/Varsity2.jpg';
import Varsity3 from './assets/clothes/Varsity3.jpg';
import Varsity4 from './assets/clothes/Varsity4.jpg';
import Cargo1 from "./assets/clothes/Cargo1.jpg";
import Cargo2 from "./assets/clothes/Cargo2.jpg";
import Hat5 from "./assets/clothes/Hat5.jpg";
import Hat6 from "./assets/clothes/Hat6.jpg";
import Jeans1 from "./assets/clothes/Jeans1.jpg";
import Sweater1 from "./assets/clothes/Sweater1.jpg";

import profilePic from './assets/Alyssa.jpg';

const users = [
  { id: 1, name: 'John', location: 'Ottawa, ON', imageUrl: Varsity1 },
  { id: 2, name: 'Emma', location: 'Ottawa, ON', imageUrl: Cargo1},
  { id: 3, name: 'Michael', location: 'Ottawa, ON', imageUrl: Hat5},
  { id: 4, name: 'Sophia', location: 'Nepean, ON', imageUrl: Varsity4},
  { id: 5, name: 'Nicky', location: 'Ottawa, ON', imageUrl: Cargo2},
  { id: 6, name: 'Emma', location: 'Nepean, ON', imageUrl: Varsity3},
  { id: 7, name: 'Lisa', location: 'Ottawa, ON', imageUrl: Hat6},
  { id: 8, name: 'Emily', location: 'Nepean, ON', imageUrl:  Jeans1},
  { id: 9, name: 'Leth', location: 'Ottawa, ON', imageUrl: Varsity2},
  { id: 10, name: 'Becky', location: 'Nepean, ON', imageUrl: Sweater1},
];

// Sample data for the inbox
const conversations = [
  { id: '1', name: 'Elon', lastMessage: 'Hey, how are you d...', time: '9:55 PM', pfp: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' },
  { id: '2', name: 'Zuck', lastMessage: 'See you tomorrow a', time: '5:45 PM', pfp: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg' },
  { id: '3', name: 'Jeff', lastMessage: 'Thanks for the help!', time: '3:10 PM', pfp: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg' },
  { id: '4', name: 'Bernard', lastMessage: 'Hey sick style dude!', time: '8:19 PM', pfp: 'https://static.wikia.nocookie.net/youtube/images/f/ff/Nick_Eh_30_face.png/revision/latest?cb=20190904212139' },
  { id: '5', name: 'Lebron', lastMessage: 'Hey, let\'s chat ano...', time: '8:29 AM', pfp: 'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/c5r52rbifxn2srhp9no0' },
  { id: '6', name: 'Albert', lastMessage: 'Lemme take a clo...', time: '5:44 PM', pfp: 'https://cdn.britannica.com/48/235948-050-9B6C79AE/R-kelly-2012.jpg' },
  { id: '7', name: 'Alicia', lastMessage: 'I would look cute i...', time: '2:18 PM', pfp: 'https://imagez.tmz.com/image/99/4by3/2022/11/22/99ee0c6cda77452eaf8da38f12414c76_md.png' },
  { id: '8', name: 'Taylor', lastMessage: 'Wow! We should tr...', time: '1:11 PM', pfp: 'https://media.architecturaldigest.com/photos/6544062de093ab4b75ca653a/16:9/w_2560%2Cc_limit/GettyImages-1730743172.jpg' },
  { id: '9', name: 'Nick', lastMessage: 'Wowzers! Looks fr...', time: '5:32 AM', pfp: 'https://i.redd.it/sifrgaei90bb1.jpg' },
  { id: '10', name: 'Donald', lastMessage: 'This looks amazin...', time: '2:30 PM', pfp: 'https://yt3.googleusercontent.com/ytc/AIdro_mZm94mCowHIe9XcJa8Kr0xyDQp7yujpX7xFOD4tg=s900-c-k-c0x00ffffff-no-rj' },
  { id: '11', name: 'Sarah', lastMessage: 'When can we meet?', time: '2:11 PM', pfp: 'https://pbs.twimg.com/media/EW1fisUWkAIwxcL.jpg' },
  { id: '12', name: 'Sam', lastMessage: 'Think that would m...', time: '1:05 PM', pfp: 'https://i1.sndcdn.com/avatars-000339084123-nag0p1-t500x500.jpg' },
  { id: '13', name: 'Justin', lastMessage: 'How about next we...', time: '1:01 PM', pfp: 'https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { id: '14', name: 'Bernardo', lastMessage: 'Ight bet. Lets lin...', time: '9:20 AM', pfp: 'https://static.wikia.nocookie.net/youtube/images/f/ff/Nick_Eh_30_face.png/revision/latest?cb=20190904212139' },
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

  const handlePageChange2 = (page, name, imageUrl) => {
    setCurrentPage(page);
    setPage4Name(name);
    setPage4ImageUrl(imageUrl);
  };
  const [page4Name, setPage4Name] = useState('');
  const [page4ImageUrl, setPage4ImageUrl] = useState('');

  let pageContent;
  switch (currentPage) {
    case 1:
      pageContent = (
        <Profile user={{ name: 'Alyssa', imageUrl: profilePic, bio: 'Hey I\'m Alyssa from Ottawa! I\'m passionate about sustainability, thrifting, and discovering hidden gems for Social Media. Let\'s connect and explore together!', location: 'Ottawa, ON' }} />
      );
      break;
    case 2:
      pageContent = (
        <View key={users[currentIndex].id} style={styles.card}>
          <Image source={users[currentIndex].imageUrl} style={styles.image} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{users[currentIndex].name} | {users[currentIndex].location}</Text>
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
                <TouchableOpacity style={styles.conversation} onPress={() => handlePageChange2(4, item.name, item.pfp)}>
                  <Image source={{ uri: item.pfp }} style={styles.pfp} />
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
        case 4:
          pageContent = (
            <View style={styles.page4Content}>
              <Text style={[styles.senderName, {color: 'black'}]}>{page4Name}</Text>
              
              {/* Chat from Other */}
              <View style={[styles.messageContainer, styles.otherChat]}>
              <Text style={[styles.messageText, {color: 'white'}]}>Hey there! How's your day going? I saw your listing and I was interested!</Text>
              </View>
              <Image source={{ uri: page4ImageUrl }} style={styles.pfp} />
        
              {/* Your chat */}
              <View style={[styles.messageContainer, styles.myChat]}>
                <Text style={[styles.messageText, {color: 'white'}]}>Very glad to hear that! I am super excited that this piece if getting a new home with someone else and not landing in a landfill.</Text>
              </View>
              <Image source={profilePic} style={styles.pfp1} />
        
              {/* Another chat from Other */}
              <View style={[styles.messageContainer, styles.otherChat]}>
                <Text style={[styles.messageText, {color: 'white'}]}>Of course! Let's talk a price and a date  by the end of this week!</Text>
              </View>
              <Image source={{ uri: page4ImageUrl }} style={styles.pfp} />
            </View>
          );
          break;        
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
    width: 20,
    height: 20, 
    borderRadius: 30, 
    padding: 17,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  pfp1: {
    width: 20, 
    height: 20,
    borderRadius: 30, 
    padding: 17,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 5,
    alignSelf: 'flex-end',
    marginBottom: 10,
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
  senderName: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Align center
  },
  
  messageContainer: {
    backgroundColor: '#E5E5EA',
    padding: 10,
    borderRadius: 10,
  },
  messageText: {
    color: 'blue',
    fontSize: 16,
  },
  time: {
    fontSize: 14,
    color: '#9a9a9a', // Light grey for the message time
    marginLeft: 90,
  },
  otherChat: {
    backgroundColor: '#2e3033',
    padding: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 5,
    alignSelf: 'flex-end',
    borderRadius: 15,
  },
  myChat: {
    backgroundColor: '#2365de',
    padding: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 20,
    alignSelf: 'flex-start',
    borderRadius: 15,
  },
  page4Container: {
    flex: 0,
    justifyContent: 'flex-start',
  },
  page4Content: {
    flex: 1,
    paddingTop: 40, // Adjust as needed
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#000',
    alignSelf: 'center',
    marginRight: 10,
    marginBottom: 30,
  },  
});
