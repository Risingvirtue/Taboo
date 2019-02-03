import React from 'react';
import Increment from './Increment.js';
import TeamName from './TeamName.js';
import './Title.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  { addUser, apiRequest } from '../actions/user-actions';

import { NavLink } from 'react-router-dom';
class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {id: 0, name: ""},
        {id: 1, name: ""}
      ]
    }

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleTeamName = this.handleTeamName.bind(this);

    this.submit = this.submit.bind(this);
  }

  handleIncrement(increment) {
    var newTeams = this.state.teams;
    if(increment === -1) {
      newTeams = this.state.teams.slice(0, this.state.teams.length - 1);
    } else if (increment === 1) {
      newTeams = [...this.state.teams, {id: this.state.teams.length, name: ""}]
    }
    this.setState({
      teams: newTeams
    })
  }


  handleTeamName(index, name) {
    const teams = [...this.state.teams];
    teams[index].name = name;
    this.setState({
      teams: teams
    })
  }

  submit() {
    console.log('props', this.props);

    this.props.onAddUser('test');

    var isValid = this.state.teams.every((team) => {return team.name !== ''})

    if (isValid) {
      const queryArr = this.state.teams.map(team => 'team' + team.id + '=' + team.name);
      this.props.onAddUser(this.state.teams.map(team => {return team.name}));
      window.location.href = '/score';
    } else {
      alert('Please enter ' + this.state.teams.length + ' teams.');
    }
  }

  render() {
    return (
      <div className="menu">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="team">
          <span id="team-title">Name of Teams</span>
          <Increment value={this.state.teams.length}
            handleIncrement={this.handleIncrement} />
        </div>
        <div>
        {this.state.teams.map(team =>
            <TeamName onChange={this.handleTeamName}
              className="team-name" id={team.id} key={team.id} />
            )}
        </div>
        <NavLink to="/score">
          <button id="start" onClick={this.submit}>Start!</button>
        </NavLink>
        <i id="settings" className="fa fa-cog" aria-hidden="true"></i>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onAddUser: addUser,
    onApiRequest: apiRequest
  }, dispatch);
}

export default connect(mapStateToProps,
  mapActionsToProps)(Title);
