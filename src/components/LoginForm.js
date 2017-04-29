import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common'

export default class LoginForm extends Component {
  state = { email: '' , password: '', error: '' };

  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((err) => {
            this.setState({ error: err.message });
          });
      });
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='user@gmail.com'
            label='Email'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder='password'
            label='Password'
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  };
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
