import {connect} from 'react-redux';
import GuideDisplay from './GuideDisplay';
import {getGuideDetails} from 'thatguide/actions/guideDetails';

const mapStateToProps = ({guideDetails, author}) => {
  return {
    guide: guideDetails,
    author
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGuideDetails: (guideId) => dispatch(getGuideDetails(guideId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GuideDisplay);