import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const withParsedDate = (Component) => {
  return class parsedDate extends React.Component {
    static propTypes = {
      date: PropTypes.string.isRequired
    }

    static defaultProps = {
      date: ''
    }

    componentDidMount() {
      Moment.locale('en');
    }

    render() {
      const parsedDate = Moment(this.props.date).fromNow();

      return <Component {...this.props} {...this.state} parsedDate={parsedDate}/>;
    }
  }
}

export default withParsedDate;