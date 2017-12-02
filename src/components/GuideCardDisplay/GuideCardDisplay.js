import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {MdThumbUp, MdFavorite} from 'react-icons/lib/md';
import withPlaceholder from 'thatguide/components/WithPlaceholder';
import withParsedDate from 'thatguide/components/WithParsedDate';

class GuideCardDisplay extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    user: PropTypes.object
  }

  static defaultProps = {
    title: 'No title here',
    date: new Date(),
    user: {},
    votes: 0,
    favs: 0
  }

  render() {
    const {title, description, _id, parsedDate, user, votes, favs} = this.props;

    return (
      <div className="card">
        <img className="card-img-top" alt=""/>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/guide/${_id}`}>{title}</Link>
            <small>{user.name}</small>
          </h4>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <span className="badge badge-pill badge-success mr-1">
            <span className="badge-text">{votes}</span>
            <MdThumbUp />
          </span>
          <span className="badge badge-pill badge-danger mr-2">
            <span className="badge-text">{favs}</span>
            <MdFavorite />
          </span>
          <small className="text-muted">{parsedDate}</small>
        </div>
      </div>
    );
  }
}

export default withPlaceholder(withParsedDate(GuideCardDisplay));