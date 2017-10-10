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
    
    if (!Object.keys(guide).length) {
      getGuideDetails(match.params.id);
    }
  }

  render() {
    const {guide} = this.props;

    return (
      <div className="container">
        <GuideDetails {...guide}/>
        <main>
          <h3>Steps</h3>
          <StepsList />
        </main>
      </div>
    )
  }
}

export default GuideDisplay;