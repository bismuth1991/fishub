import React from 'react';
import { Link } from 'react-router-dom';

const EmptyTackleBox = () => (
  <div className="container empty-box">
    <p>
      <span>An empty tackle box catches no fish.</span>
      {' '}
      <span role="img" aria-label="sad">😕</span>
    </p>
    <Link to="/baits">Fill&#39;er Up!</Link>
  </div>
);

export default EmptyTackleBox;
