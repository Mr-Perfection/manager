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

### Immutable state
```

```
