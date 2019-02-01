import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Title from './Title/Title';
import Score from './Score/Score';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  { addUser } from './actions/user-actions'
class App extends React.Component {
  constructor(props) {
    super(props);

    this.onAddUser = this.onAddUser.bind(this);
  }

  onAddUser() {
    this.props.onAddUser('Test1123');
  }
  render() {
    console.log(this.props)
    this.onAddUser();
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
    words: state.words,
    users: state.users
  }
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onAddUser: addUser
  }, dispatch);


}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log()
}


export default connect(mapStateToProps,
  mapActionsToProps)(App);
