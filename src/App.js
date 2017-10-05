import React, { Component } from 'react';
import './App.css';

import StepDisplay from './components/StepDisplay';
import NewStepButton from './components/NewStepButton';
import NewStepForm from './components/NewStepForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>That Guide</h1>

        <div className="row">
          <div className="col-md-8">
            <StepDisplay />
            <NewStepForm />
          </div>
          <aside className="col-md-4">
            <NewStepButton />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;