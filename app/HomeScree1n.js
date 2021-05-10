import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Pressable,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    {/*   <Pressable
        onPress={() => alert('home')}
        focusable={true}
        onFocus={() => console.log('home screen')}
        android_ripple={{color: 'green', borderless: true, radius: 20}}>
        <View
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            backgroundColor: 'red',
          }}
          nextFocusDown={2.5}></View>
      </Pressable>
 */}
      <TouchableHighlight
        style={{
          width: 100,
          height: 100,
          borderWidth: 1,
          backgroundColor: 'green',
          justifyContent:'center',
          alignItems:'center'
        }} onPress={()=>console.log('hello,World!')}>
            <Text>Home</Text>
        </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
