import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Pokemon" />
      <Link type="submit" to={`/pokemon/${search}`}>Submit</Link>
    </div>
  );
};

export default Filter;
