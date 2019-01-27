import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Title from './Title/Title';
import Score from './Score/Score';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <Route exact path="/" component={Title} />
          <Route exact path="/score" component={Score} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
