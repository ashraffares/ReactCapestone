/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchPokeData from '../../Redux/actions/PokeAction';
import styles from './PokeList.module.css';

const PokeList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.PokeReducer);

  useEffect(() => {
    dispatch(FetchPokeData());
  }, []);
  console.log(state);
  const RenderPokeList = () => {
    if (state.loading) {
      return <h1 className={styles.loading}>loading ...</h1>;
    }
    const ListLength = state.items.length;
    if (ListLength > 0) {
      const pokemons = state.items;
      return pokemons.map((poke) => <p key={poke.url}>{poke.name}</p>);
    }
    return <h1>Can not get pokemon list try again.</h1>;
  };
  return <div>{RenderPokeList()}</div>;
};

export default PokeList;
