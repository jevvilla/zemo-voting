import React from 'react';

import { CardContainer } from '../../components';

import './styles.scss';

export const Home = () => {
  return (
    <div className="home-container">
      <CardContainer />
      <div className="footer">
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Follow Us</li>
          <li>
            <i className="fa fa-facebook-square"></i>
          </li>
          <li>
            <i className="fa fa-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
