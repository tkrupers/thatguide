import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ListOfGuides from './components/ListOfGuides';
import GuideDisplay from './components/GuideDisplay';
import NewStepButton from './components/NewStepButton';
import NewStepFormContainer from './components/NewStepForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav className="navbar sticky-top navbar-light bg-light">
            <Link className="navbar-brand" to="/">That guide</Link>
          </nav>
          <div className="container">
            <div className="col-md-8">
              <Route exact path='/' component={ListOfGuides}/>
              <Route path="/guide/:id" component={GuideDisplay}/>
              <Route path="/guide/:id/new-step" component={NewStepFormContainer}/>
            </div>
            <aside className="col-md-4">
              <Route exact path="/guide/:id" component={NewStepButton}/>
            </aside>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;