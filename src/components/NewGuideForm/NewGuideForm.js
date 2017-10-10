import React from 'react';
import PropTypes from 'prop-types';

/** Form to create a new guide */
class NewGuideForm extends React.PureComponent {
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

  render() {
    const {history} = this.props;

    return (
      <section className="new-guide-form__wrapper">
        <h2>New Guide form</h2>
        <form title="Create new guide form">
          <div className="form-group">
            <label htmlFor="inputGuideTitle">Title</label>
            <input
              id="inputGuideTitle"
              name="guideTitle"
              type="text"
              className="form-control"
              placeholder="Awesome clear title"
              value={this.props.title}
              onChange={this.props.handleTitleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="textAreaGuideDescription">Description</label>
            <textarea
              id="textAreaGuideDescription"
              name="guideDescription"
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

export default NewGuideForm;