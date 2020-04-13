import React from 'react';

import { CardContainer } from '../../components';

import './styles.scss';

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner" />
      <div className="home-voting">
        <CardContainer />
      </div>
    </div>
  );
};
