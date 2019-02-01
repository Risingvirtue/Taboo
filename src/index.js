import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';
import wordReducer from './Reducers/WordReducer';
import userReducer from './Reducers/UserReducer';


const allReducers = combineReducers({
  words: wordReducer,
  users: userReducer
})
const store = createStore(allReducers,
  {
  users: [],
  words: []
}, window.devToolsExtension && window.devToolsExtension()
);


const action = {
  type:'updateUser',
  payload: {
    user: 'John'
  }

}

store.dispatch(action);

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
