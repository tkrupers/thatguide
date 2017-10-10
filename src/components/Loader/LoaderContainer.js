import {connect} from 'react-redux';
import Loader from './Loader';

const mapStateToProps = (state) => {
  return {
    loading: state.loader
  }
};


export default connect(mapStateToProps)(Loader);