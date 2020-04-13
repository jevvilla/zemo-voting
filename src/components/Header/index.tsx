import React from 'react';

import './styles.scss';

export const Header = () => {
  return (
    <div className="header-container">
      <h1>Rule of Thumb</h1>
      <ul>
        <li>Past Trials</li>
        <li>How It Works</li>
        <li>Log In / Sign Up</li>
        <li>
          <i className="fa fa-search"></i>
        </li>
      </ul>
    </div>
  );
};
