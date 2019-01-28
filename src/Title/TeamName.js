import React from 'react';
import './TeamName.css';
const colors = {
  tomato: '#F06449',
  platinum: '#EDE6E3',
  gainsboro: '#DADAD9',
  jet: '#36382E',
  blue: '#5BC3EB'
}

class TeamName extends React.Component {
  constructor(props) {
    super(props);
  }

  changeTeam = (e) => {
    this.props.onChange(this.props.id, e.target.value);
  }

  render() {
    return (
      <input className="team-name" onChange={this.changeTeam} placeholder={'Team ' + (this.props.id + 1)} />
    )
  }
}


export default TeamName;
