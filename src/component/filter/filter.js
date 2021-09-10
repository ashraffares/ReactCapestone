/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label htmlFor="Sort">
      <select name="Sort" id="Sort" onChange={(e) => dispatch(e)}>
        <option value="Default">Default</option>
        <option value="Alphabetically">Alphabetically</option>
        <option value="Reverse">Reverse</option>
      </select>
    </label>
  );
};

export default Filter;
