import React from 'react';
import PropTypes from 'prop-types';
import WithPlaceholder from 'thatguide/components/WithPlaceholder';

class AuthorProfile extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    name: PropTypes.string,
  }

  static defaultProps = {
    email: 'johndoe@test.com',
    name: 'John doe'
  }

  componentDidMount() {
    const {author, getAuthorDetails} = this.props;
    if (!author.email) {
      getAuthorDetails(author.id);
    }
  }

  render() {
    const {email, name, location, age} = this.props.author;

    return (
      <div className="author-profile">
        <header>
          <h3>{name} {email}</h3>
        </header>
      </div>
    )
  }
}

export default WithPlaceholder(AuthorProfile);
