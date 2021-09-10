/* eslint-disable no-console */
import React from 'react';
import styles from './filter.module.css';

const Filter = () => (
  <div className={styles.container}>
    <label htmlFor="filter">
      <select className={styles.select} name="filter" id="filter" onChange={(e) => console.log(e.target.value)}>
        <option value="All">All</option>
        <option value="Width">Width</option>
        <option value="Height">Height</option>
      </select>
    </label>
  </div>
);

export default Filter;
