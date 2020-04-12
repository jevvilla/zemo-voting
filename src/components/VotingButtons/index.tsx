import React from 'react';

import { Button } from '../Button';

import './styles.scss';

type Props = {
  onVote: (vote: string) => void;
  onVoteAgain: () => void;
  id: string;
  userVotedAlready: boolean;
};

export const VotingButtons: React.FC<Props> = ({ onVote, onVoteAgain, userVotedAlready, id }) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('up');

  const handleOptionChange = (e: any) => {
    const { value } = e.target;

    setSelectedOption(value);
  };

  const handleClickVote = () => onVote(selectedOption);

  return (
    <>
      {!userVotedAlready && (
        <>
          <label>
            <input
              type="radio"
              name={`radioVote-${id}`}
              value="up"
              checked={selectedOption === 'up'}
              onChange={handleOptionChange}
            />
            <span className="vote-icon vote-up-icon">
              <i className="fa fa-thumbs-up" />
            </span>
          </label>
          <label>
            <input
              type="radio"
              name={`radioVote-${id}`}
              value="down"
              checked={selectedOption === 'down'}
              onChange={handleOptionChange}
            />
            <span className="vote-icon vote-down-icon">
              <i className="fa fa-thumbs-down" />
            </span>
          </label>
        </>
      )}
      {userVotedAlready ? (
        <Button title="Vote Again" onClick={onVoteAgain} />
      ) : (
        <Button title="Vote now" onClick={handleClickVote} />
      )}
    </>
  );
};
