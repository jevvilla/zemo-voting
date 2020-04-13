import React from 'react';

import './styles.scss';

export const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};
