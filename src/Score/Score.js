import React from 'react';
import { connect } from 'react-redux';
import './Score.css';

class Score extends React.Component {
  render() {

    console.log(this.props);
    return (
      <div>
        {this.props.users.length == 2 &&
          <div class="modal">

          </div>
        }
        <div id="line"></div>
        <div className="modal">
          <div className='inner-modal'>

          <div class="column">
            <div id='first'>Johnny</div>
          </div>

            <div id='vs'>vs</div>
            <div id='second'>Pyroaddict</div>
          </div>
        </div>

        {this.props.users.map(user => <div>{user}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}



export default connect(mapStateToProps)(Score);
