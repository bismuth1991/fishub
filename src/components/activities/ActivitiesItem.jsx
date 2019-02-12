import React from 'react';
import formatDate from '../../utils/formatDate';

const ActivitiesItem = ({
  username,
  bait,
  image,
  species,
  weight,
  length,
  created_at,
}) => (
  <>
    <div className="card-header">
      <span className="username">{username}</span>
        logged a catch on
      <span className="date">{formatDate(created_at)}</span>
    </div>
    <div className="card-body">
      <p className="card-text">
        <img
          className="bait"
          src={image}
          alt={bait}
        />
        <span className="species">{species}</span>

        <span> weighing</span>
        <span className="weight" test-data="weight">
          {`${weight} pounds`}
        </span>

        <span>with a length of</span>
        <span className="length" test-data="length">
          {`${length} inches`}
        </span>
      </p>
    </div>
  </>
);

export default ActivitiesItem;
