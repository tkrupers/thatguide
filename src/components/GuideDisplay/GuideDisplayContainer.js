import {connect} from 'react-redux';
import GuideDisplay from './GuideDisplay';
import {getGuideDetails} from 'thatlist/actions/guideDetails';
import {getAuthorById} from 'thatlist/actions/author';

const mapStateToProps = ({guideDetails, author}) => {
  return {
    guide: guideDetails,
    author
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGuideDetails: (guideId) => dispatch(getGuideDetails(guideId)),
    getAuthor: (authorId) => dispatch(getAuthorById(authorId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GuideDisplay);