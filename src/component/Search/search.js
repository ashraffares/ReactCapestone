import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './search.module.css';

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input className={styles.input} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Pokemon" />
      <Link className={styles.btn} to={`/pokemon/${search}`}>Submit</Link>
    </div>
  );
};

export default Search;
