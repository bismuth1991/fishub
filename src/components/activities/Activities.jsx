import React from 'react';

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

export default Activities;
