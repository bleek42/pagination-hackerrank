import { render } from 'enzyme';
import React, { Component } from 'react';
import './App.scss';

import Articles from './components/Articles';

class App extends Component {



  render() {
    return (
      <div>
        <Articles />
      </div>
    );
  }
}

export default App;
