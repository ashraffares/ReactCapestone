import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => (
  <NavLink className={styles.navbar} to="/">Pokemon</NavLink>
);

export default Navbar;
