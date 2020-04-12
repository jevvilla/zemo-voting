import React from 'react';

import { VotingButtons } from '../VotingButtons';

import './styles.scss';

type Votes = {
  [key: string]: number;
};

type character = {
  id: number;
  imageUrl: string;
  name: string;
  category: string;
  createdAt: string;
  description: string;
  votes: {
    up: number;
    down: number;
  };
};

type Props = {
  item: character;
};

export const Card: React.FC<Props> = ({ item }) => {
  const { id, name, imageUrl, description, createdAt, category, votes: totalVotes } = item;

  const [votes, setVotes] = React.useState<Votes>(totalVotes);

  const calculatePercentageOfVotes = (currentVotes: number): number => {
    const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);

    const percentage = (currentVotes * 100) / totalVotes;

    return Math.round(percentage);
  };

  const registerVote = (vote: string) => {
    setVotes((votes) => ({ ...votes, [vote]: votes[vote] + 1 }));
  };

  const votesUp = calculatePercentageOfVotes(votes.up);
  const votesDown = calculatePercentageOfVotes(votes.down);

  return (
    <div className="card-component" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="card-info">
        <div className="card-title">
          <span className="vote-icon">
            <i className="fa fa-thumbs-up" />
          </span>
          <span className="title">{name}</span>
        </div>
        <div className="card-content">
          <div className="remaining-time">
            <b>{createdAt}</b> in {category}
          </div>
          <div>
            <span className="description">{description}</span>
          </div>
          <div className="voting">
            <VotingButtons onVote={registerVote} />
          </div>
        </div>
      </div>
      <div className="progress">
        <div className="progress__votes-up" style={{ width: `${votesUp}%` }}>
          <div>
            <i className="fa fa-thumbs-up" />
          </div>
          <span>{votesUp}%</span>
        </div>
        <div className="progress__votes-down" style={{ width: `${votesDown}%` }}>
          <span>{votesDown}%</span>
          <div>
            <i className="fa fa-thumbs-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
