import React from 'react';

class ScoreCard extends React.Component {
  render() {
    return (
      <div id='score' className='scorecard'>
        <div className='score-title'>Scores:</div>
        {this.props.users.map(user =>
          <div className='user'>
            {user.name}
            <span class='score'>{user.score}</span>
          </div>)}
      </div>
    )
  }
}


export default ScoreCard;
