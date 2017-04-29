import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common'

export default class LoginForm extends Component {
  state = { email: '' , password: '' };

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
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  };
}
