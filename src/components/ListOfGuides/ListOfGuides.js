import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class ListOfGuides extends React.Component {
  componentDidMount() {
    if (this.props.guides.length) 
      return;
    
    this
      .props
      .fetchAllGuides();
  }

  render() {
    const guideList = this
      .props
      .guides
      .map(guide => 
      <li key={guide._id}>
        <Link to={`/guide/${guide._id}`}>{guide.title}</Link>
      </li>
      );

    return (
      <ul className="guides__list">
        {guideList}
      </ul>
    );
  }
}

export default ListOfGuides;
