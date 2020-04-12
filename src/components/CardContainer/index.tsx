import React from 'react';

import { Card } from '../Card';
import { characters } from '../../assets/data';
import { Character } from '../../common/types';

import './styles.scss';

export const CardContainer = () => {
  return (
    <section className="vote-section-component">
      {characters.map((item: Character) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
};
