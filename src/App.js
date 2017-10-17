import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import NewGuideForm from './components/NewGuideForm';
import ListOfGuides from './components/ListOfGuides';
import GuideDisplay from './components/GuideDisplay';
import NewStepButton from './components/NewStepButton';
import NewStepFormContainer from './components/NewStepForm';
import Loader from './components/Loader';
import AuthorProfile from './components/AuthorProfile';
import NavBar from './components/NavBar/';
import Alert from './components/Alert';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar/>
          <Loader/>
          <Alert/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignupForm}/>
          <Route exact path="/profile/:id" component={AuthorProfile}/>
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