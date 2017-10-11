import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import NewGuideForm from './components/NewGuideForm';
import ListOfGuides from './components/ListOfGuides';
import GuideDisplay from './components/GuideDisplay';
import NewStepButton from './components/NewStepButton';
import NewStepFormContainer from './components/NewStepForm';
import Loader from './components/Loader';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav className="navbar sticky-top navbar-light bg-light">
            <Link className="navbar-brand" to="/">That guide</Link>
            <Link to="/new-guide" className="btn btn-outline-primary">Create new guide</Link>
          </nav>
          <Loader />
          <div className="container">
            <div className="col-md-8">
              <Route exact path='/' component={ListOfGuides}/>
              <Route path='/new-guide' component={NewGuideForm}/>
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