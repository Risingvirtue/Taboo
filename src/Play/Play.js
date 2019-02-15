import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setWords } from '../actions/word-actions';
class Play extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    //this.setPlayerIndex();
  }

  componentDidMount() {
    this.getWordsList();
  }

  setPlayerIndex = () => {
    console.log('ength', this.state.users.length)
    for (var i = 0; i < this.state.users.length; i++) {
      var user = this.state.users[i];
      if (!user.hasGone) {
        this.setState({
          index: i
        })
      }
    }
  }

  getWordsList = () => {
    this.props.setWords('easy');

  }


  render() {
    
    return <div>Test</div>
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    setWords: setWords
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Play);
