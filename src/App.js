import React, { Component } from 'react';
import './App.css';

import StepDisplay from './components/StepDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>That Guide</h1>

        <div>
          <StepDisplay />
        </div>
      </div>
    );
  }
}

export default App;
