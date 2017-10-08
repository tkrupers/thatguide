import React from 'react';
import PropTypes from 'prop-types';

/** Form to create a new step */
class NewStepForm extends React.PureComponent {
  static propTypes = {
    /** New step title */
    title: PropTypes.string,
    /** New step description */
    description: PropTypes.string,
    /** Handles submit for component */
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    /** Placeholder function */
    onSubmit: () => {}
  }

  render() {
    const {history} = this.props;

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
              value={this.props.title}
              onChange={this.props.handleTitleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="textAreaStepDescription">Description</label>
            <textarea
              id="textAreaStepDescription"
              name="stepDescription"
              className="form-control"
              placeholder="What should a dummy do?"
              value={this.props.description}
              onChange={this.props.handleDescriptionChange}/>
          </div>

          <button type="button" onClick={history.goBack} className="btn btn-light" title="Cancel">Cancel</button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.props.handleSubmit}>
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default NewStepForm;