import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import StepDisplay from './components/StepDisplay';
import NewStepButton from './components/NewStepButton';
import NewStepFormContainer from './components/NewStepForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>That Guide</h1>

          <div className="row">
            <div className="col-md-8">
              <Route exact path="/" component={StepDisplay}/>
              <Route path="/new-step" component={NewStepFormContainer}/>
            </div>
            <aside className="col-md-4">
              <Route component={NewStepButton}/>
            </aside>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;