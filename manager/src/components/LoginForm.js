import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
      </CardSection>

       <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
       </CardSection>

       <Text style={styles.errorTextSyle}>
         { this.props.error }
       </Text>

       <CardSection>
         <Button onPress={this.onButtonPress.bind(this)}>
           Login
         </Button>
       </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextSyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;
  return { email, password, error };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
