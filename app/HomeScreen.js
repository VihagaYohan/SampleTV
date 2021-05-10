import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  TouchableHighlight,
} from 'react-native';

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    return fetch('https://www.reddit.com/r/pic/top.json?t=year')
      .then(r => r.json())
      .then(json => {
        const data = json.data.children.map(c => c.data);
        setPosts(data);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.map(post => (
        <View style={styles.tile} key={post.id}>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={{uri: post.thumbnail}}
            imageStyle={styles.background}
            onPress={() => {
                console.log('hello')
              setModalVisible(true);
              setSelectedImage(post.thumbnail);
            }}
          />
          <Text style={styles.title}>{post.title}</Text>
        </View>
      ))}

      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(fals)}>
        {/*there is a bug in react native tv os: modal will not close properly, unless you wrap it's content into TouchableHighlight */}
        <TouchableHighlight
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <Image
            source={{uri: selectedImage}}
            style={{width: '100%', height: '100%'}}
          />
        </TouchableHighlight>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1faee',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tile: {
    height: 200,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    flexBasis: '20%',
  },
  background: {
    borderColor: '#1d3557',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
