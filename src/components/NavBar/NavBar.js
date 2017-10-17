import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class NavBar extends React.PureComponent {
  static propTypes = {
    loggedIn: PropTypes.bool,
    logout: PropTypes.func
  }
  render() {
    const {loggedIn, _id} = this.props.author;
    const loggedInLinks = <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/new-guide" className="btn btn-primary">Create new guide</Link>
      </li>
      <li className="nav-item">
        <Link to={`/profile/${_id}`} className="btn btn-primary">Profile</Link>
      </li>
      <li>
        <a href="/" onClick={this.props.logout} className="btn btn-primary">Logout</a>
      </li>
    </ul>;

    const loggedOutLinks = <ul className="navbar-nav ml-auto">
      <li>
        <Link to="/signup" className="btn btn-primary">Signup</Link>
      </li>
      <li>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </li>
    </ul>

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
          {loggedIn
            ? loggedInLinks
            : loggedOutLinks}
        </div>
      </nav>
    );
  }
}

export default NavBar;