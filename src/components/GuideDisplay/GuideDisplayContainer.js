import {connect} from 'react-redux';
import GuideDisplay from './GuideDisplay';
import {getGuideDetails} from 'thatlist/actions/guideDetails';

const mapStateToProps = (state) => {
  return {
    guide: state.guideDetails
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGuideDetails: (guideId) => dispatch(getGuideDetails(guideId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GuideDisplay);