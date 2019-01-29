import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Title from './Title/Title';
import Score from './Score/Score';

import { combineReducers, createStore } from 'redux';


function userReducer(state = [], action) {
  if (action.type == 'changeState') {
    return action.payload.newState;
  }
  return state;
}

function wordReducer(state = {}, action) {
  return state;
}

const allReducers = combineReducers({
  words: wordReducer,
  users: userReducer
})
const store = createStore(allReducers, {
  words: {'test': true, 'why': true},
  users: ['Johnny']
});
console.log(store.getState());

const action = {
  type:'changeState',
  payload: {
    newState: 'New State'
  }

}

store.dispatch(action);

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Title} />
          <Route exact path="/score" component={Score} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
