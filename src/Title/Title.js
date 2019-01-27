import React from 'react';
import Increment from './Increment.js';
import TeamName from './TeamName.js';
import './Title.css';
class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {id: 0, name: ""},
        {id: 1, name: ""}
      ]
    }

    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleTeamName = this.handleTeamName.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleLeft(e) {
    const teams = this.state.teams;
    this.setState({
      teams: teams.slice(0, teams.length - 1)
    })
  }

  handleRight(e) {
    const teams = this.state.teams;
    teams.push({id: teams.length, name: ""});
    this.setState({
      teams: teams
    })
  }

  handleTeamName(index, name) {
    const teams = this.state.teams;
    teams[index].name = name;
    this.setState({
      teams: teams
    })
  }

  submit() {
    var isValid = true;
    for (let i = 0; i < this.state.teams.length; i++) {
      const name = this.state.teams[i].name;
      if (name === '') {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      const queryArr = this.state.teams.map(team => 'team' + team.id + '=' + team.name);
      window.location.href='/score?' + queryArr.join('&');
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
            handleLeft={this.handleLeft}
            handleRight={this.handleRight} />
        </div>
        <div>
        {this.state.teams.map(team =>
            <TeamName onChange={this.handleTeamName}
              className="team-name" id={team.id} />
            )}
        </div>

        <button id="start" onClick={this.submit}>Start!</button>

        <i id="settings" className="fa fa-cog" aria-hidden="true"></i>
      </div>
    )
  }
}


export default Title;
