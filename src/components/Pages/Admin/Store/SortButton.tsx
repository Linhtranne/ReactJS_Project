import React from 'react';
import { SortButtonProps } from '../../Interface/interface';
const SortButton: React.FC<SortButtonProps> = ({ sortOrder, sortUsers }) => {
  return (
    <button onClick={sortUsers}>
      Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
    </button>
  );
};

export default SortButton;
