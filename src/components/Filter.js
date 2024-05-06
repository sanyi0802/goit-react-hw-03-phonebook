import React from 'react';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
