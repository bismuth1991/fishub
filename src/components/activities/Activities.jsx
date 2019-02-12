import React from 'react';
import { func, bool, arrayOf, shape, string, number } from 'prop-types';

import ActivitiesItem from './ActivitiesItem';

class Activities extends React.Component {
  componentDidMount() {
    const { fetchActivities } = this.props;
    fetchActivities();
  }

  render() {
    const { activities, isLoading } = this.props;

    return isLoading ? (
      <div className="container">
        <div className="spinner" test-data="spinner">
          <i className="fas fa-spinner fa-spin" />
        </div>
      </div>
    ) : (
      <ul className="container">
        {activities.map(activity => (
          <li key={activity.id} className="card text-left">
            <ActivitiesItem {...activity} />
          </li>
        ))}
      </ul>
    );
  }
}

Activities.propTypes = {
  fetchActivities: func.isRequired,
  isLoading: bool.isRequired,
  activities: arrayOf(shape({
    id: number,
    username: string,
    bait: string,
    image: string,
    species: string,
    weight: string,
    length: string,
    createdAt: string,
  })).isRequired,
};

export default Activities;
