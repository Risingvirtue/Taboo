import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Title from './Title/Title';
import Score from './Score/Score';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  { addUser } from './actions/user-actions';
import { setCollection } from './actions/word-actions';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.onAddUser = this.onAddUser.bind(this);
    this.onSetCollection = this.onSetCollection.bind(this);
  }

  componentDidMount() {
    //this.props.onApiRequest();
    
  }

  onAddUser() {
    this.props.onAddUser('Test1123');
  }

  onSetCollection(collection) {
    this.props.onSetCollection(collection);
  }
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

const mapStateToProps = state => {
  return {
    users: state.users,
    words: state.words
  }
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onAddUser: addUser,
    onSetCollection: setCollection
  }, dispatch);
}

export default connect(mapStateToProps,
  mapActionsToProps)(App);
