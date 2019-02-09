import React from 'react';
import { connect } from 'react-redux';
import './Score.css';

class Score extends React.Component {


  componentDidMount() {
      /*
      setTimeout(() =>{
        var modal = document.getElementById('modal');
        modal.classList.add('display-none');
        var scoreCard = document.getElementById('score')
        scoreCard.classList.remove('display-none');
      }, 3000)
      */
  }

  getPlayer = (users) => {
    var user = users.find(user => {return !user.hasGone});
    return user.name;
  }


  render() {

    var users = [{name: 'Johnny', score: 0, hasGone: false}, {name: 'Pyroaddict', score: 0, hasGone: false}];
    return (
      <div>
        <div id="line"></div>
        <div id = "modal" className="modal">
          <div className='inner-modal'>
            <div className= 'background'>
              <div className="column left">
                <div id='first'>Johnny</div>
              </div>
            </div>
            <div className = 'background'>
              <div id='vs'>vs</div>
            </div>
            <div className = 'background'>
              <div className="column right">
                <div id='second'>Pyroaddict</div>
              </div>
            </div>
          </div>
        </div>

        <div id='score' className='scorecard'>
          <div className='score-title'>Scores:</div>
          {users.map(user =>
            <div className='user'>
              {user.name}
              <span class='score'>{user.score}</span>
            </div>)}
        </div>

        <div class='start'>
          <div class='turn'>{this.getPlayer(users)}, it's your turn!</div>
          <button id="start-btn">Start</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}



export default connect(mapStateToProps)(Score);
