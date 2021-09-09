/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchPokeInfo } from '../../Redux/actions/PokeAction';
import Info from '../Info';
import styles from './PokeInfo.module.css';

const PokeInfo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getInfoReducer);
  const { pokemon, id } = useParams();

  useEffect(() => {
    dispatch(FetchPokeInfo(id, pokemon));
  }, []);
  console.log(state.data);
  const RenderPokeInfo = () => {
    if (state.loading) {
      return <h1 className={styles.loading}>Loading ...</h1>;
    }
    if (state.error) {
      return <h1>Something went wrong try again!</h1>;
    }
    return state.data.map((poke) => <Info key={id} poke={poke} />);
  };

  return (
    <div>{RenderPokeInfo()}</div>
  );
};

export default PokeInfo;
