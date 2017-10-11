import {connect} from 'react-redux';
import Loader from './Loader';

const mapStateToProps = ({loader}) => {
  return {
    fetching: loader.fetching,
    saving: loader.saving
  }
};


export default connect(mapStateToProps)(Loader);