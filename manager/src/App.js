import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAcaIcM8EzByLZah3_LlIvOKFAzc0b7QxE',
      authDomain: 'manager-88f95.firebaseapp.com',
      databaseURL: 'https://manager-88f95.firebaseio.com',
      projectId: 'manager-88f95',
      storageBucket: 'manager-88f95.appspot.com',
      messagingSenderId: '959701600616'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
