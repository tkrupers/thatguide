import React from 'react';
import PropTypes from 'prop-types';

/** Form to create a new step */
class NewStepForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stepTitle: '',
      stepDescription: ''
    }
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    onSubmit: () => {}
  }

  handleChange = event => {
    const key = event.target.name;
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <section className="new-step-form__wrapper">
        <h2>New Step form</h2>
        <form title="Create new step form">
          <div className="form-group">
            <label htmlFor="inputStepTitle">Title</label>
            <input
              id="inputStepTitle"
              name="stepTitle"
              type="text"
              className="form-control"
              placeholder="Awesome clear title"
              onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="textAreaStepDescription">Description</label>
            <textarea
              id="textAreaStepDescription"
              name="stepDescription"
              className="form-control"
              placeholder="What should a dummy do?"
              value={this.state.stepDescription}
              onChange={this.handleChange}/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    );
  }
}

export default NewStepForm;