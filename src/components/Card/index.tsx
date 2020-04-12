import React from 'react';

import { VotingButtons } from '../VotingButtons';

import './styles.scss';

type Votes = {
  [key: string]: number;
};

export const Card = () => {
  const [votes, setVotes] = React.useState<Votes>({
    up: 90,
    down: 30,
  });

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
    <div className="card-component">
      <div className="card-info">
        <div className="card-title">
          <span className="vote-icon">
            <i className="fa fa-thumbs-up" />
          </span>
          <span className="title">Mark Zuckerberg</span>
        </div>
        <div className="card-content">
          <div className="remaining-time">
            <b>1 month ago</b> in Business
          </div>
          <div>
            <span className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed tenetur placeat.
            </span>
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
