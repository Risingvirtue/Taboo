import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {teams: []}
  }

  render() {
    return (
      <div>
        <h1>Name of Teams<span>2</span></h1>
        <input type="text" placeholder="Team 1" />

      </div>
    )
  }
}


export default Title;
