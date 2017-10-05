import React from 'react';
import PropTypes from 'prop-types';

class StepDisplay extends React.PureComponent {
  static propTypes = {
    stepNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  static defaultProps = {
    stepNumber: 1,
    title: 'Title',
    description: 'Lorem ipsum ap Body text is often way longer than the lead text'
  };

  render() {
    const {stepNumber, title, description} = this.props;

    return (
      <article className="step__wrapper">
        <header>
          <h3 className="step__title">
            <span className="step__badge">{stepNumber}</span>
            {title}
          </h3>
        </header>
        <main>
          <div className="step__body">{description}</div>
        </main>
      </article>
    );
  }
};

export default StepDisplay;