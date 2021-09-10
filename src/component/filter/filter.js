import React from 'react';

const Filter = () => (
  <>
    <label htmlFor="filter">
      <select className="select" name="filter" id="filter">
        <option value="All">All</option>
        <option value="Width">Width</option>
        <option value="Height">Height</option>
      </select>
    </label>
  </>
);

export default Filter;
