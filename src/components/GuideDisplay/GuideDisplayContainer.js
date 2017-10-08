import {connect} from 'react-redux';
import GuideDisplay from './GuideDisplay';
import {getGuideDetails} from 'thatlist/actions/guideDetails';

const mapStateToProps = ({guideDetails}) => {
  return {
    guide: guideDetails
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGuideDetails: (guideId) => dispatch(getGuideDetails(guideId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GuideDisplay);