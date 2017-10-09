import React from 'react';
import PropTypes from 'prop-types';

class GuideDetails extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    author: PropTypes.object
  }

  static defaultProps = {
    author: {}
  }

  render() {
    const {title, shortDescription, author} = this.props;
    const {name, location} = author;
    return (
      <section className="guide-details row">
        <div className="col-md-12">
          <h1 className="guide-details__title">{title}</h1>
          <h3 className="guide-details__author">{name} <small>{location}</small></h3>
          <p className="lead">{shortDescription}</p>
        </div>
      </section>
    )
  }
}

export default GuideDetails;