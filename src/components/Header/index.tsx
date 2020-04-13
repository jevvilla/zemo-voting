import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__navigation">
        <div className="header__navigation-logo">
          <h1>Rule of Thumb</h1>
        </div>
        <div className="header__navigation-bars">
          <i className="fa fa-bars"></i>
        </div>
        <div className="header__navigation-items">
          <ul>
            <li>
              <NavLink exact={true} to="howitworks">
                Past Trials
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} to="howitworks">
                How It Works
              </NavLink>
            </li>
            <li>Log In / Sign Up</li>
            <li>
              <i className="fa fa-search"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
