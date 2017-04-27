# manager
React Native Application

### Setup
```
$ npm install --save react-redux redux
$ npm install --save firebase
```

basic setup
```js
import {
  AppRegistry,
} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('manager', () => App);
```

### Handling Form Updates
1. User types something
2. Call Action Creator with new text
3. Action Creator returns an action
4. Action sent to all reducers
5. Reducer calculates new app state
6. State sent to all components
7. Component rerender with new state

### Types.js
```
_________               ____________               ___________
|         |             |            |             |           |
| Reducer |<------------| Types.js   |------------▶|  Action   |
|_________|             |____________|             |___________|
                        * EMAIL_CHANGED = 'email_changed'
                        * PASSWORD_CHANGE = 'password_changed'
```

```js
export const EMAIL_CHANGED = 'email_changed'; // did not use export default because there are many other types that will be exported in a file.
```

### Proposed State
1. Email
When user types something on a email field
2. Password
When user types something on a password field
3. Loading
True when we start our auth process, false when it completes
4. Error
Default to empty string. Throw an error when auth is failed
5. User
Default to null. Put in the user model when we successfully auth.

### Login User
* When `login` button is tapped, call `loginUser` action creator with email and password.
* Action creator makes request to log user in.

### Async. Action Creator
1. Call to Action Creator
2. Action Creator runs
3. Request to firebase is made -> request complete and we can return action
4. WE have nothing to return  

### Redux Thunk
```
$ npm install --save redux-thunk
```

### Action Creator Rules with Thunk
* Action Creators return an action
* Action Creators return a function that is called with 'dispatch'

### Handling email and password login & signup & error handling with Firebase
```js
firebase.auth().signInWithEmailAndPassword(email, password)
.then(user => loginUserSuccess(dispatch, user))
.catch(() => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user => loginUserSuccess(dispatch, user))
  .catch(() => loginUserFail(dispatch));
});
```
