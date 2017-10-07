import React from 'react';
import PropTypes from 'prop-types';

class GuideDetails extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    shortDescription: PropTypes.string,
  }

  render() {
    const {title, shortDescription} = this.props;
    return (
      <section className="guide-details row">
        <div className="col-md-12">
          <h1 className="guide-details__title">{title}</h1>
          <p className="lead">{shortDescription}</p>
        </div>
      </section>
    )
  }
}

export default GuideDetails;