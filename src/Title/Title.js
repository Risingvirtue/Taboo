import React from 'react';
import Increment from './Increment.js';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {teams: 2}

    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  handleLeft(e) {
    this.setState({
      teams: this.state.teams - 1
    })
  }

  handleRight(e) {
    this.setState({
      teams: this.state.teams + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Name of Teams</h1>
        <Increment value={this.state.teams} handleLeft={this.handleLeft} handleRight={this.handleRight} />
        <input type="text" placeholder="Team 1" />

      </div>
    )
  }
}


export default Title;
