import React from 'react';
import PropTypes from 'prop-types';

class StepDisplay extends React.PureComponent {
  static propTypes = {
    stepNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired
  };

  static defaultProps = {
    stepNumber: 1,
    title: 'Title',
    description: {
      lead: 'Lorem ipsum ap',
      body: 'Body text is often way longer than the lead text'
    }
  };

  render() {
    const {stepNumber, title, description} = this.props;
    const {lead, body} = description;

    return (
      <div className="step__wrapper">
        <header>
          <h3 className="step__title">
            <span className="step__badge">{stepNumber}</span>
            {title}
          </h3>
          <p className="step__lead">{lead}</p>
        </header>
        <main>
          <div className="step__body">{body}</div>
        </main>
      </div>
    );
  }
};

export default StepDisplay;