import React from 'react';
import { connect } from 'react-redux';

class Score extends React.Component {
  render() {

    console.log(this.props);
    return <h1>Test</h1>
  }
}

const mapStateToProps = (state) => {
  return state;
}



export default connect(mapStateToProps)(Score);
