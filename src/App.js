import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

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
      <div className="app">
        <NavBar currentUser={this.props.currentUser}/>
        <Loader/>
        <Alert/>
        <Switch>
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignupForm}/>
          <Route exact path="/profile/:id" component={AuthorProfile}/>
          <Route exact path='/' render={(props) => <ListOfGuides card { ...props }/>}/>
          <Route path='/new-guide' component={NewGuideForm}/>
          <Route path="/guide/:id" component={GuideDisplay}/>
          <Route path="/guide/:id/new-step" component={NewStepFormContainer}/>
          <Route path="/guide/:id" component={NewStepButton}/>
          <Route path="/guide/:id" component={ListOfGuides}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    currentUser: user
  }
}

export default connect(mapStateToProps, () => ({}))(App);