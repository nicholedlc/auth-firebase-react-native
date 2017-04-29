import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'

export default class LoginForm extends Component {
  state = { email: '' , password: '', error: '', loading: false };

  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(err => this.onLoginFailure(err))
      });
  }

  onLoginFailure = (err) => {
    this.setState({ error:  err.message, loading: false });
  }

  onLoginSuccess = () => {
    this.setState({ email: '', password: '', error: '', loading: false });
  }

  renderButton () {
    if(this.state.loading) {
      return <Spinner size='small' />
    }
    return (
      <Button onPress={this.onButtonPress}>
        Log in
      </Button>
    );
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
          {this.renderButton()}
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
