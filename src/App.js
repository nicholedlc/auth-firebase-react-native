import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAS1XBsSLnia_hgnppUkNAKpiroRE9vvE4',
      authDomain: 'auth-49a38.firebaseapp.com',
      databaseURL: 'https://auth-49a38.firebaseio.com',
      projectId: 'auth-49a38',
      storageBucket: 'auth-49a38.appspot.com',
      messagingSenderId: '475828148611'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  logOut = () => {
    this.setState({ loggedIn: false });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true: return (
        <CardSection>
          <Button onPress={() => this.logOut()}>
            Log Out
          </Button>
        </CardSection>
      );
      case false: return <LoginForm />;
      default: return <Spinner size='large' />
    }
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
