import React from 'react';

import { Card } from '../Card';
import { characters } from '../../assets/data';
import { Character } from '../../common/types';

import './styles.scss';

export const CardContainer = () => {
  return (
    <section className="card-container-component">
      <h1>Votes</h1>
      <div className="vote-section">
        {characters.map((item: Character) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
