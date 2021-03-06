import React from 'react';
import './Increment.css';
export const colors = {
  tomato: '#F06449',
  platinum: '#EDE6E3',
  gainsboro: '#DADAD9',
  jet: '#36382E',
  blue: '#5BC3EB'
}

class Increment extends React.Component {

  render() {
    const leftArrow = "<";
    const rightArrow = ">";

    return (
      <span id="container">
        <button className='arrow' disabled={this.props.value === 2} onClick={() => {return this.props.handleIncrement(-1)}}>{leftArrow}</button>
        <span>{this.props.value}</span>
        <button className="arrow" disabled={this.props.value === 4} onClick={() => {return this.props.handleIncrement(1)}}>{rightArrow}</button>
      </span>
    )
  }
}


export default Increment;
