import React from 'react';
import propTypes from 'prop-types';
import styles from './Poke.module.css';

const Poke = ({ pokemon, id }) => {
  const { name } = pokemon;
  return (
    <div className={styles.card}>
      <div className={styles.pokemon}>
        <img className={styles.img} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} alt={name} />
        <span className={styles.title}>{name}</span>
      </div>
      <button type="button" value={id} className={styles.btn}>View</button>
    </div>
  );
};

Poke.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
  }).isRequired,
  id: propTypes.number.isRequired,
};

export default Poke;
