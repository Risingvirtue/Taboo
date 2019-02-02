import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';
import wordReducer from './Reducers/WordReducer';
import userReducer from './Reducers/UserReducer';



const allReducers = {

  users: userReducer
}

const allStoreEnhancers = compose (
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(allReducers,
  {
<<<<<<< HEAD
  users: []
}, allStoreEnhancers
=======
  users: [],
  words: []
}, window.devToolsExtension && window.devToolsExtension()
>>>>>>> f05bfdbd0e83fb1ce0dd926ff7945d4f6bf4b735
);


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
