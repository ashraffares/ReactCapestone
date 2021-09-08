import React from 'react';
import propTypes from 'prop-types';

const Poke = ({ pokemon, id }) => {
  const { name } = pokemon;
  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} alt={name} />
      <span>{name}</span>
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
