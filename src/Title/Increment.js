import React from 'react';
import './Increment.css';
const colors = {
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
      <div>
        <button className="arrow" onClick={this.props.handleLeft} >{leftArrow}</button>
        <span>{this.props.value}</span>
        <button className="arrow" onClick={this.props.handleRight}>{rightArrow}</button>
      </div>
    )
  }
}


export default Increment;
