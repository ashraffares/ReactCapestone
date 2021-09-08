/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';

const PokeInfo = () => {
  const state = useSelector((state) => state.getInfoReducer);
  console.log(state);
  return (
    <div>this is pokemon</div>
  );
};

export default PokeInfo;
