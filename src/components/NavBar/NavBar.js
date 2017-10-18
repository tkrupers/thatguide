import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this
      .toggle
      .bind(this);
    this.state = {
      isOpen: false
    };
  }

  static propTypes = {
    loggedIn: PropTypes.bool,
    logout: PropTypes.func
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {loggedIn, _id} = this.props.author;
    const loggedInLinks = <Nav className="ml-auto" navbar>
      <NavItem>
        <Link to="/new-guide" className="btn btn-primary">Create new guide</Link>
      </NavItem>
      <NavItem>
        <Link to={`/profile/${_id}`} className="btn btn-primary">Profile</Link>
      </NavItem>
      <NavItem>
        <NavLink href="/" onClick={this.props.logout} className="btn btn-primary">Logout</NavLink>
      </NavItem>
    </Nav>;

    const loggedOutLinks = <Nav className="ml-auto" navbar>
      <NavItem>
        <Link to="/signup" className="btn btn-link">Signup</Link>
      </NavItem>
      <NavItem>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </NavItem>
    </Nav>

    return (
      <Navbar color="faded" light fixed="true" expand="md">
        <NavbarBrand href="/">That guide</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          {loggedIn
            ? loggedInLinks
            : loggedOutLinks}
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;