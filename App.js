/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// screens
import HomeScreen from './app/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return <HomeScreen />;
};

const styles = StyleSheet.create({});

export default App;
