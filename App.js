import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const App = () => {
  const [currentPage, setCurrentPage] = useState('name');

  const handlePageChange = () => {
    switch (currentPage) {
      case 'name':
        setCurrentPage('education');
        break;
      case 'education':
        setCurrentPage('projects');
        break;
      case 'projects':
        setCurrentPage('contact');
        break;
      case 'contact':
        setCurrentPage('name');
        break;
      default:
        setCurrentPage('name');
        break;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePageChange}>
      {currentPage === 'name' && (
        <View style={styles.pageContainer}>
          <Image
            source={require('./laojhane.jpg')}
            style={styles.profilePicture}
          />
          <Text style={styles.name}>Jhane Shai P. Lao</Text>
          <Text style={styles.name1}>Bachelor of Science in</Text>
          <Text style={styles.name1}>Information Technology</Text>
        </View>
      )}
      {currentPage === 'education' && (
        <View style={styles.pageContainer}>
          <Text style={styles.content}>Education:</Text>
          <Text style={styles.content1}>College:</Text>
          <Text style={styles.content2}>• Global Reciprocal College</Text>
          <Text style={styles.content2}>• AMA Computer Learning Center Meycauyan</Text>
          <Text style={styles.content1}> </Text>
          <Text style={styles.content1}>Senior High School:</Text>
          <Text style={styles.content2}>• Malinta National High School - Senior High</Text>
          <Text style={styles.content1}> </Text>
          <Text style={styles.content1}>Junior High School:</Text>
          <Text style={styles.content2}>• Malinta National High School</Text>
          <Text style={styles.content1}> </Text>
          <Text style={styles.content1}>Elementary:</Text>
          <Text style={styles.content2}>• Rincon Elementary School</Text>
        </View>
      )}
      {currentPage === 'projects' && (
        <View style={styles.pageContainer}>
          <Text style={styles.content}>Projects</Text>
          <Image
            source={require('./logo.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.project}>Sales and Information System</Text>
          <Text style={styles.project}>of Boxes of Joy</Text>
          <Text style={styles.project1}>SysArch (2023)</Text>
          <Text style={styles.content}></Text>
          <Image
            source={require('./misaki.jpg')}
            style={styles.profilePicture}
          />
          <Text style={styles.project}>Static Website of</Text>
          <Text style={styles.project}>Misaki's Handmade</Text>
          <Text style={styles.project1}>misakishandmade.github.io/misaki/</Text>
        </View>
      )}
      {currentPage === 'contact' && (
        <View style={styles.pageContainer}>
          <Text style={styles.content}>Contact Me:</Text>
          <Text style={styles.content1}>Mobile:</Text>
          <Text style={styles.content2}> 09122517909</Text>
          <Text style={styles.content1}> </Text>
          <Text style={styles.content1}>Email:</Text>
          <Text style={styles.content2}> jhaneshailaodev@gmail.com</Text>
          <Text style={styles.content1}> </Text>
          <Text style={styles.content1}>LinkedIn:</Text>
          <Text style={styles.content2}> https://www.linkedin.com/in/jhaneshailao/</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebf1f1',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  name1:{
    fontSize: 16,
    marginHorizontal: 48,
  }, 
  project: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -5,
  },
  project1:{
    fontSize: 12,
    marginHorizontal: 48,
  }, 
  content: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginHorizontal: 18,
    lineHeight: 56,
  },
  content1: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginHorizontal: 18,
  },
  content2: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginHorizontal: 24,
  },
});

export default App;