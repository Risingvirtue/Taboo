import React from 'react';
import Increment from './Increment.js';
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
        {this.state.teams.map(team => <input className="team-name" placeholder={'Team ' + (team.id + 1)} />)}
        </div>
        <i id="settings" className="fa fa-cog" aria-hidden="true"></i>
      </div>
    )
  }
}


export default Title;
