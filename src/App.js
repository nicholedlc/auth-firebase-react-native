import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAS1XBsSLnia_hgnppUkNAKpiroRE9vvE4',
    authDomain: 'auth-49a38.firebaseapp.com',
    databaseURL: 'https://auth-49a38.firebaseio.com',
    projectId: 'auth-49a38',
    storageBucket: 'auth-49a38.appspot.com',
    messagingSenderId: '475828148611'
  })
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}
