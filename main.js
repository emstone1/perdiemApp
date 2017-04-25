import Expo from 'expo';
import React, { Component } from 'react';
import * as firebase from 'firebase'
import { StyleSheet, Text, View } from 'react-native';

// Initialize Firebase
 firebase.initializeApp({
       apiKey: "AIzaSyAk4SseEgf0bSmhkZgPje2-EAX-3ay3Xdc",
       authDomain: "perdiem-a3b62.firebaseapp.com",
       databaseURL: "https://perdiem-a3b62.firebaseio.com",
       projectId: "perdiem-a3b62",
       storageBucket: "perdiem-a3b62.appspot.com",
       messagingSenderId: "54659155919"
 });


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up d.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
