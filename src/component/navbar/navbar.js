import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search';
import styles from './navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.wrapper}>
      <NavLink className={styles.links} to="/">Pokemon</NavLink>
      <Search className={styles.filter} />
    </div>
  </nav>
);

export default Navbar;
