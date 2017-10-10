import {connect} from 'react-redux';
import {fetchAllGuides} from 'thatguide/actions/guides';
import ListOfGuides from './ListOfGuides';

const mapStateToProps = state => {
  return {
    guides: state.guides
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllGuides: () => dispatch(fetchAllGuides())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfGuides);