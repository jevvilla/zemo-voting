import React from 'react';

import './styles.scss';

type Props = {
  onClick: () => void;
  title: string;
};

export const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="custom-button">
      {title}
    </button>
  );
};
