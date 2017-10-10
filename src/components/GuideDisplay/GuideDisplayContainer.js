import {connect} from 'react-redux';
import GuideDisplay from './GuideDisplay';
import {getGuideDetails} from 'thatguide/actions/guides';
import {getGuideAuthor, getCurrentGuide} from 'thatguide/selectors/guide';

const mapStateToProps = state => {
  return {
    guide: getCurrentGuide(state),
    author: getGuideAuthor(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGuideDetails: (guideId) => dispatch(getGuideDetails(guideId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GuideDisplay);