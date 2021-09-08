/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchPokeData from '../../Redux/actions/PokeAction';

const PokeList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(FetchPokeData());
  }, []);

  console.log(state);
  return <div>PokeList</div>;
};

export default PokeList;
