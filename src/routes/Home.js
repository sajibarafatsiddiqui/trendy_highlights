import BaseCard from 'components/BaseCard';
import Cards from 'components/Cards';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCurrencyAgainstBase } from 'redux/currencySlice';
import { pick } from 'lodash';
import BaseCurrencyContext from 'context/BaseCurrencyContext';

const Home = () => {
  const dispatch = useDispatch();
  const { baseCurrency } = useContext(BaseCurrencyContext);
  const { rates } = useSelector((state) => state.currency);
  const filteredRates = pick(rates, 'EUR', 'AUD');
  useEffect(() => {
    dispatch(fetchAllCurrencyAgainstBase(baseCurrency));
  }, [dispatch, baseCurrency]);
  return (
    <div>
      <h1>Hello</h1>
      <BaseCard baseCurrency={baseCurrency} />
      <Cards rate={filteredRates} />
    </div>
  );
};

export default Home;
