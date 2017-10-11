import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/** Form to create a new step */
class SignupForm extends React.PureComponent {
  static propTypes = {
    /** Handles submit for component */
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    /** Placeholder function */
    onSubmit: () => {}
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleEmailInput = this
      .handleEmailInput
      .bind(this);
    this.handlePasswordInput = this
      .handlePasswordInput
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleEmailInput(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordInput(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password
    };

    this
      .props
      .handleSubmit(payload);
  }

  render() {
    return (
      <section className="container">
        <h2>Signup Form</h2>
        <form title="Create account">
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input
              id="inputEmail"
              name="stepTitle"
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={this.handleEmailInput}/>
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              id="inputPassword"
              name="stepDescription"
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={this.handlePasswordInput}/>
          </div>

          <Link to="/login" className="btn btn-light" title="Login">Login</Link>

          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default SignupForm;