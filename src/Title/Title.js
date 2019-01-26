import React from 'react';
import Increment from './Increment.js';

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
      <div>
        <h1>Name of Teams</h1>
        <Increment value={this.state.teams.length} handleLeft={this.handleLeft} handleRight={this.handleRight} />
        {this.state.teams.map(team => <input placeholder={'Team ' + (team.id + 1)} />)}

      </div>
    )
  }
}


export default Title;
