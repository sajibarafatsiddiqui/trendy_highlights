import BaseCard from 'components/BaseCard';
import Cards from 'components/Cards';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCurrencyAgainstBase } from 'redux/currencySlice';

const Home = () => {
  const dispatch = useDispatch();
  const baseCurrency = 'USD';
  const { rates } = useSelector((state) => state.currency);
  useEffect(() => {
    dispatch(fetchAllCurrencyAgainstBase(baseCurrency));
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <BaseCard baseCurrency={baseCurrency} />
      <Cards rate={rates} />
    </div>
  );
};

export default Home;
