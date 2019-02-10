import React from 'react';
import Link from 'react-router-dom/Link';
import { number, string, bool, func } from 'prop-types';

const BaitItem = ({
  id,
  name,
  category,
  image,
  isInTackleBox,
  addToTackleBox,
}) => (
  <div className="card">
    <img
      className="card-img-top bait"
      src={image}
      alt={name}
    />

    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle">{category}</h6>

      {isInTackleBox ? (
        <Link to="/tackle-box" className="btn btn-secondary">
          In Tackle Box
        </Link>
      ) : (
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={addToTackleBox(id)}
        >
          <i className="fas fa-toolbox" />
          Tackle Box
        </button>
      )}
    </div>
  </div>
);

BaitItem.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  category: string.isRequired,
  image: string.isRequired,
  isInTackleBox: bool.isRequired,
  addToTackleBox: func.isRequired,
};

export default BaitItem;
