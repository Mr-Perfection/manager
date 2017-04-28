import React, { Component } from 'react';
// import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
