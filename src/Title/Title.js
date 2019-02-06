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
      ],
      isValid: false
    }

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleTeamName = this.handleTeamName.bind(this);

    this.setUsers = this.setUsers.bind(this);
  }

  handleIncrement(increment) {
    var newTeams = this.state.teams;
    if(increment === -1) {
      newTeams = this.state.teams.slice(0, this.state.teams.length - 1);
    } else if (increment === 1) {
      newTeams = [...this.state.teams, {id: this.state.teams.length, name: ""}]
    }
    var isValid = newTeams.every((team) => {return team.name !== ''});
    this.setState({
      teams: newTeams,
      isValid:isValid
    })
  }


  handleTeamName(index, name) {
    const teams = [...this.state.teams];
    teams[index].name = name;
    var isValid = teams.every((team) => {return team.name !== ''});
    this.setState({
      teams: teams,
      isValid: isValid
    })
  }

  setUsers() {
    this.props.onAddUser(this.state.teams.map(team => team.name));
  }


  render() {
    return (
      <div className="menu">

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
        {!this.state.isValid && <div>Please enter name for each team</div>}
        <NavLink id="nav-link" to="/score">
          <button id="start" onClick={this.setUsers} disabled={!this.state.isValid}>Start!</button>
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
