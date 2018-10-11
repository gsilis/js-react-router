import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './menu';
import Pages from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="site">
          <div className="header">
            <Menu />
          </div>
          <hr />
          <div className="main">
            <Pages />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
