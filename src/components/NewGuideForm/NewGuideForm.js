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

/** Form to create a new guide */
class NewGuideForm extends React.PureComponent {
  constructor() {
    super();

    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }
  static propTypes = {
    /** New guide title */
    title: PropTypes.string,
    /** New guide description */
    description: PropTypes.string,
    /** Handles submit for component */
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    /** Placeholder function */
    onSubmit: () => {}
  }

  handleSubmit(e) {
    e.preventDefault();
    this
      .props
      .handleSubmit()
  }

  render() {
    const {history, pristine, submitting} = this.props;

    return (
      <Container>
        <Row>
          <Col sm={{
            size: 6,
            offset: 6
          }}>
            <h2>New Guide form</h2>
            <Form title="Create new guide form" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="guideTitle">Title</Label>
                <Field
                  name="guideTitle"
                  component="input"
                  type="text"
                  placeholder="New guide title"
                  className="form-control"
                  value={value => value.trim()}/>
              </FormGroup>

              <FormGroup>
                <Label for="guideDescription">Description</Label>
                <Field
                  name="guideDescription"
                  component="textarea"
                  placeholder="Short description of your guide"
                  className="form-control"/>
              </FormGroup>

              <Button
                type="button"
                onClick={history.goBack}
                color="light"
                title="Cancel"
                outline>Cancel</Button>

              <Button color="primary" outline disabled={pristine || submitting}>
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default reduxForm({form: 'guide'})(NewGuideForm);