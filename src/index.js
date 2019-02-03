import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';
import wordReducer from './Reducers/WordReducer';
import userReducer from './Reducers/UserReducer';



const allReducers = combineReducers({
  words: wordReducer,
  users: userReducer
});

const allStoreEnhancers = compose (
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(allReducers,
  {
  users: [],
  words: []
},allStoreEnhancers
);


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
