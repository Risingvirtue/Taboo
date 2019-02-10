import React from 'react';

class Banner extends React.Component {
  render() {
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
        </div>
    );
  }
}

export default Banner;
