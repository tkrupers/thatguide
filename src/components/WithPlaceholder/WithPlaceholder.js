import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PlaceholderComponent from './Placeholder';

/**
 * 
 * @param {*} Component 
 */
const withPlaceholder = (Component) => {
  class Placeholder extends React.Component {
    static propTypes = {
      loading: PropTypes.bool.isRequired
    }

    render() {
      const {loading} = this.props;

      if (loading) 
        return <PlaceholderComponent/>;
      
      return <Component {...this.props} {...this.state}/>;
    }
  }

  const mapStateToProps = ({loader}) => {
    return {loading: loader.fetching}
  };

  return connect(mapStateToProps)(Placeholder);
}

export default withPlaceholder;