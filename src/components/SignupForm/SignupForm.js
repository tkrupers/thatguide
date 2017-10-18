import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form'
import {Link, Redirect} from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  FormText,
  Container,
  Row,
  Col
} from 'reactstrap';

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

    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {values} = this.props.loginForm;

    if (values.email && values.password) {
      this
        .props
        .handleSubmit({username: values.email, password: values.password});
    }
  }

  render() {
    const {author, submitting, pristine} = this.props;

    if (author && author.loggedIn) {
      return <Redirect to={`/profile/${author._id}`}/>
    };

    return (
      <Container>
        <Row>
          <Col sm={{
            size: 6,
            offset: 6
          }}>
            <h2>Signup Form</h2>
            <Form title="Create account" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Your email address"
                  className="form-control"
                  value={value => value.trim()}/>
              </FormGroup>

              <FormGroup className="form-group">
                <Label for="password">Password</Label>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Your password"
                  className="form-control"
                  normalize={value => value.trim()}/>
                <FormText color="muted">
                  Passwords are case-sensitive.
                </FormText>
              </FormGroup>

              <FormGroup className="form-group">
                <Label for="passwordConfirm">Password</Label>
                <Field
                  name="passwordConfirm"
                  component="input"
                  type="password"
                  placeholder="Confirm your password"
                  className="form-control"
                  normalize={value => value.trim()}/>
                <FormText color="muted">
                  Retype your password to confirm
                </FormText>
              </FormGroup>

              <Link to="/login" className="btn btn-link" title="Login">Login</Link>
              <Button color="primary" outline disabled={pristine || submitting}>
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const validateRegister = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

}

export default reduxForm({form: 'register', validateRegister})(SignupForm);