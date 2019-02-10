import React from 'react';
import { connect } from 'react-redux';

import ScoreCard from './ScoreCard';
import Banner from './Banner';

import './Score.css';

import { NavLink } from 'react-router-dom';

class Score extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  componentDidMount() {

      setTimeout(() =>{
      this.setState({
        showModal: false
      })
      }, 3000)

  }

  getPlayer = (users) => {
    var user = users.find(user => {return !user.hasGone});
    return user.name;
  }


  render() {

    var users = [{name: 'Johnny', score: 0, hasGone: false}, {name: 'Pyroaddict', score: 0, hasGone: false}];
    return (
      <div>
        {
            this.state.showModal ?
            <Banner /> :
            <ScoreCard users={users} />
          }

        <div class='start'>
          <div class='turn'>{this.getPlayer(users)}, it's your turn!</div>
          <NavLink to='./Play'>
            <button id="start-btn">Start</button>
          </NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}



export default connect(mapStateToProps)(Score);
