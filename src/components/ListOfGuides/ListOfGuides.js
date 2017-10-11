import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import GuideCardDisplay from 'thatguide/components/GuideCardDisplay';

class ListOfGuides extends React.PureComponent {
  static propTypes = {
    guides: PropTypes.array.isRequired
  }

  componentDidMount() {
    if (this.props.guides.length) 
      return;
    
    this
      .props
      .fetchAllGuides();
  }

  render() {
    const {guides, match, card} = this.props;

    const guideList = guides.map(guide => {
      const isActive = match.params.id === guide._id;

      if (card) {
        return <GuideCardDisplay key={guide._id} {...guide}/>
      }

      return <li className={isActive
        ? 'active'
        : ''} key={guide._id}>
        <Link to={`/guide/${guide._id}`}>{guide.title}</Link>
        {isActive
          ? <span className="pl-1 text-muted"><small>(Currently reading)</small></span>
          : null}
      </li>
    });

    return (
      <section>
        {!card && <h3 className="mt-3">Seen these guides yet?</h3>}
        <div className={card ? 'card-columns' : ''}>
          {guideList}
        </div>
      </section>
    );
  }
}

export default ListOfGuides;
