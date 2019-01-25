import React from 'react';

class Increment extends React.Component {


  render() {
    const leftArrow = "<";
    const rightArrow = ">";

    return (
      <div>
        <button onClick={this.props.handleLeft} >{leftArrow}</button>
        <span>{this.props.value}</span>
        <button onClick={this.props.handleRight}>{rightArrow}</button>
      </div>
    )
  }
}


export default Increment;
