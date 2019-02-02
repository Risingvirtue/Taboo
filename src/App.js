import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Title from './Title/Title';
import Score from './Score/Score';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
<<<<<<< HEAD
import  { addUser, apiRequest } from './actions/user-actions'
=======
import  { addUser } from './actions/user-actions';
import { setCollection } from './actions/word-actions';
>>>>>>> f05bfdbd0e83fb1ce0dd926ff7945d4f6bf4b735
class App extends React.Component {
  constructor(props) {
    super(props);

    this.onAddUser = this.onAddUser.bind(this);
    this.onSetCollection = this.onSetCollection.bind(this);
  }

  componentDidMount() {
    this.props.onApiRequest();
  }

  onAddUser() {
    this.props.onAddUser('Test1123');
  }

  onSetCollection(collection) {
    this.props.onSetCollection(collection);
  }
  render() {

    //this.onAddUser();
    //this.onSetCollection([{'test': ['no', 'yes', 'butwhy']}]);

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

<<<<<<< HEAD
const mapActionsToProps = {
    onAddUser: addUser,
    onApiRequest: apiRequest
=======
const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onAddUser: addUser,
    onSetCollection: setCollection
  }, dispatch);

>>>>>>> f05bfdbd0e83fb1ce0dd926ff7945d4f6bf4b735

}

export default connect(mapStateToProps,
  mapActionsToProps)(App);
