import React from 'react';
import { string } from 'prop-types';
import formatDate from '../../utils/formatDate';

const ActivitiesItem = ({
  username,
  bait,
  image,
  species,
  weight,
  length,
  createdAt,
}) => (
  <>
    <div className="card-header activity-header">
      <span className="username">{username}</span>
      <span> logged a catch on </span>
      <span className="date">{formatDate(createdAt)}</span>
    </div>
    <div className="card-body activity-body">
      <p className="card-text">
        <img
          className="bait activity-img"
          src={image}
          alt={bait}
        />
        <span className="species">{species}</span>

        <span> weighing </span>
        <span className="weight" test-data="weight">
          {`${weight} pounds`}
        </span>

        <span> with a length of </span>
        <span className="length" test-data="length">
          {`${length} inches`}
        </span>
      </p>
    </div>
  </>
);

ActivitiesItem.propTypes = {
  username: string.isRequired,
  bait: string.isRequired,
  image: string.isRequired,
  species: string.isRequired,
  weight: string.isRequired,
  length: string.isRequired,
  createdAt: string.isRequired,
};

export default ActivitiesItem;
