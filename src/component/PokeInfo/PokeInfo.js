/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchPokeInfo } from '../../Redux/actions/PokeAction';

const PokeInfo = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getInfoReducer);

  const { match } = props;
  const { params } = match;
  const { pokemon, id } = params;

  useEffect(() => {
    dispatch(FetchPokeInfo(id, pokemon));
  }, []);
  console.log(state);
  return (
    <div>this is pokemon</div>
  );
};

export default PokeInfo;
