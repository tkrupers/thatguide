import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import GuideDisplay from './components/GuideDisplay';
import NewStepButton from './components/NewStepButton';
import NewStepFormContainer from './components/NewStepForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>That Guide</h1>
          <div className="col-md-8">
            <Route path="/guide/:id" component={GuideDisplay}/>
            <Route path="/guide/:id/new-step" component={NewStepFormContainer}/>
          </div>
          <aside className="col-md-4">
            <Route exact path="/guide/:id" component={NewStepButton}/>
          </aside>
        </div>
      </Router>
    );
  }
}

export default App;