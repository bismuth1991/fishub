import React from 'react';
import { shape, string } from 'prop-types';
import CatchForm from '../CatchForm/CatchForm';

const TackleBoxItem = ({
  bait: {
    image,
    name,
    category,
  },
}) => (
  <div id="selected-item" className="col-md-9">
    <div className="card">
      <figure className="card-header">
        <img
          className="bait"
          src={image}
          alt={name}
        />
        <h5>
          <span className="count">Count goes here...</span>
          fish totaling
          <span className="weight">Weight goes here...</span>
          {' '}
          lbs
        </h5>
      </figure>

      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h5 className="card-subtitle">{category}</h5>
      </div>

      <div className="card-footer">
        <CatchForm />
      </div>
    </div>
  </div>
);

TackleBoxItem.propTypes = {
  bait: shape({
    image: string,
    name: string,
    category: string,
  }).isRequired,
};


export default TackleBoxItem;
