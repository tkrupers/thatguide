import {connect} from 'react-redux';
import AuthorProfile from './AuthorProfile';

const mapStateToProps = state => {
  return {
    author: state.author
  }
}

export default connect(mapStateToProps)(AuthorProfile);