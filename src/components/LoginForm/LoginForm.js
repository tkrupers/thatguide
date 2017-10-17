import React from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';

/** Form to create a new step */
class LoginForm extends React.PureComponent {
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
      username: '',
      password: '',
      submitted: false
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
    this.setState({username: e.target.value});
  }

  handlePasswordInput(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitted: true});
    const {username, password} = this.state;

    if (username && password) {
      this
        .props
        .handleSubmit({username, password});
    }
  }

  render() {
    const {username, password, submitted} = this.state;
    const {author} = this.props;

    if (author && author.loggedIn) {
      return <Redirect to={`/profile/${author._id}`} />
    };

    return (
      <section className="container">
        <h2>Welcome back</h2>
        <form title="Create account">
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input
              id="inputEmail"
              name="stepTitle"
              type="email"
              className={submitted && !username ? 'form-control is-invalid' : 'form-control'}
              placeholder="Email"
              onChange={this.handleEmailInput}
              required/>
              {(submitted && !username) && <span className="form-text text-danger">Email is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              id="inputPassword"
              name="stepDescription"
              type="password"
              className={submitted && !password ? 'form-control is-invalid' : 'form-control'}
              placeholder="Password"
              onChange={this.handlePasswordInput}
              required/>
              {(submitted && !password) && <span className="form-text text-danger">Password is required</span>}
          </div>

          <Link to="/signup" className="btn btn-light" title="Login">Register</Link>

          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
            Login
          </button>
        </form>
      </section>
    );
  }
}

export default LoginForm;