import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import SignupForm from './components/SignupForm';
import NewGuideForm from './components/NewGuideForm';
import ListOfGuides from './components/ListOfGuides';
import GuideDisplay from './components/GuideDisplay';
import NewStepButton from './components/NewStepButton';
import NewStepFormContainer from './components/NewStepForm';
import Loader from './components/Loader';
import AuthorProfile from './components/AuthorProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">That guide</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/new-guide" className="btn btn-primary">Create new guide</Link>
                </li>
                <li>
                  <Link to="/signup" className="btn btn-success">Signup</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Loader/>
          <Route path="/signup" component={SignupForm}/>
          <Route path="/profile" component={AuthorProfile}/>
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