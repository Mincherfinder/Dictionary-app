import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {Component} from 'react';
import HomeScreen from './Screens/HomeScreen';
export default class App extends Component {
  render() {
    return(
      <View><HomeScreen/></View>
    )
  }
}