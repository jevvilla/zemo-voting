import React from 'react';

import { Button } from '../Button';

import './styles.scss';

type Props = {
  onVote: (vote: string) => void;
  id: string;
};

export const VotingButtons: React.FC<Props> = ({ onVote, id }) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('up');

  const handleOptionChange = (e: any) => {
    const { value } = e.target;

    setSelectedOption(value);
  };

  const handleClickVote = () => onVote(selectedOption);

  return (
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
      <Button title="Vote now" onClick={handleClickVote} />
    </>
  );
};
