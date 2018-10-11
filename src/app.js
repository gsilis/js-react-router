import React, { Component } from 'react';
import Menu from './menu';
import Pages from './pages';

class App extends Component {
  render() {
    return (
      <div className="site">
        <div className="header">
          <Menu />
        </div>
        <div className="main">
          <Pages />
        </div>
      </div>
    );
  }
}

export default App;
