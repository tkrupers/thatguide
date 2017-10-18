import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form'
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
import {Link, Redirect} from 'react-router-dom';

/** Form to create a new step */
class LoginForm extends React.PureComponent {
  static propTypes = {
    /** Handles submit for component */
    onSubmit: PropTypes.func.isRequired,
    author: PropTypes.object,
    loginForm: PropTypes.object
  }

  static defaultProps = {
    /** Placeholder function */
    onSubmit: () => {},
    loginForm: {}
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
    const {author} = this.props;

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
            <h2>Welcome back</h2>
            <Form title="Login form" onSubmit={this.handleSubmit}>
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

              <FormGroup>
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

              <Link to="/signup" className="btn btn-link" title="Login">Register</Link>

              <Button color="success" outline>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default reduxForm({form: 'login'})(LoginForm);