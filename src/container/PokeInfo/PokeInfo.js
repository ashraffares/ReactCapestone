import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchPokeInfo } from '../../Redux/actions/PokeAction';
import Info from '../../component/Info/Info';
import styles from './PokeInfo.module.css';

const PokeInfo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { pokemon } = useParams();

  useEffect(() => {
    dispatch(FetchPokeInfo(pokemon));
  }, []);

  const list = state.getInfoReducer.data;
  const listOfValues = Object.values(list);
  const pokemonInfo = listOfValues.filter((obj) => obj.name === pokemon);

  const RenderPokeInfo = () => {
    if (state.loading) {
      return <h1 className={styles.loading}>Loading ...</h1>;
    }

    if (pokemonInfo[0]) {
      return <Info pokemon={pokemonInfo[0]} />;
    }

    return (
      <h1 className={styles.notFound}>
        Sorry, can&apos;t find a pokemon with this name:
        <span>
          { pokemon }
        </span>
      </h1>
    );
  };

  return (
    <div>{RenderPokeInfo()}</div>
  );
};

export default PokeInfo;
