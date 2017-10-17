import React from 'react';
import PropTypes from 'prop-types';
import WithParsedDate from 'thatguide/components/WithParsedDate';
import withPlaceholder from 'thatguide/components/WithPlaceholder';
import {Link} from 'react-router-dom';

class GuideDetails extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.object,
    date: PropTypes.string,
    parsedDate: PropTypes.string
  }

  static defaultProps = {
    author: {
      name: 'John Doe',
      email: 'johndoe@test.com',
      location: 'Unknown'
    }
  }

  render() {
    const {title, description, author, parsedDate} = this.props;
    const {name, location, email, _id} = author;

    return (
      <section className="guide-details row">
        <div className="col-md-12">
          <h1 className="guide-details__title">{title}</h1>
          <h3 className="guide-details__author">
            <Link to={`/profile/${_id}`}>{name}
              <small>{email}, {location}</small>
            </Link>
          </h3>
          <h4>{parsedDate}</h4>
          <p className="lead">{description}</p>
        </div>
      </section>
    )
  }
}

export default withPlaceholder(WithParsedDate(GuideDetails));