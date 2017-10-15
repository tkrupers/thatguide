import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class NavBar extends React.PureComponent {
  render() {
    return (
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
    );
  }
}

export default NavBar;