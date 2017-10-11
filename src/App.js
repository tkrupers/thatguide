import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import SignupForm from './components/SignupForm';
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
          <nav className="navbar sticky-top navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">That guide</Link>
            <Link to="/new-guide" className="btn btn-primary">Create new guide</Link>
            <Link to="/signup" className="btn btn-success">Signup</Link>
          </nav>
          <Loader/>
          <Route path="/signup" component={SignupForm} />
          <div className="container">
            <div className="row">
              <div className='col-md-8 mt-2'>
                <Route
                  exact
                  path='/'
                  render={(props) => < ListOfGuides card {
                  ...props
                } />}/>
                <Route path='/new-guide' component={NewGuideForm}/>
                <Route path="/guide/:id" component={GuideDisplay}/>
                <Route path="/guide/:id/new-step" component={NewStepFormContainer}/>
              </div>
              <aside className="col-md-4 mt-2">
                <Route path="/guide/:id" component={NewStepButton}/>
                <Route path="/guide/:id" component={ListOfGuides}/>
              </aside>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;