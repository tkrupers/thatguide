import React from 'react';
import PropTypes from 'prop-types';
import GuideDetails from 'thatguide/components/GuideDetails';
import StepsList from 'thatguide/components/StepsList';

class GuideDisplay extends React.PureComponent {
  static propTypes = {
    guide: PropTypes.object.isRequired
  }

  componentDidMount() {
    const {guide, match, getGuideDetails} = this.props;
    
    if (guide._id !== match.params.id) {
      getGuideDetails(match.params.id);
    }
  }

  componentWillReceiveProps({guide, match, getGuideDetails}) {
    if (guide._id !== match.params.id) {
      getGuideDetails(match.params.id);
    }
  }

  render() {
    const {guide} = this.props;

    return (
      <div className="container">
        <GuideDetails {...guide}/>
        <main>
          <StepsList />
        </main>
      </div>
    )
  }
}

export default GuideDisplay;