import {connect} from 'react-redux';
import {getCurrentAuthor} from 'thatguide/selectors/author';
import {getAuthorById} from 'thatguide/actions/author';
import AuthorProfile from './AuthorProfile';

const mapStateToProps = state => {
  return {
    author: getCurrentAuthor(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAuthorDetails: authorId => dispatch(getAuthorById(authorId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorProfile);