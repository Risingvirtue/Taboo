import React from 'react';
import { connect } from 'react-redux';

class Score extends React.Component {
  render() {

    console.log(this.props);
    return (
      <div>
        {this.props.users.map(user => <div>{user}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}



export default connect(mapStateToProps)(Score);
