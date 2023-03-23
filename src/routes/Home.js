import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCurrencyAgainstBase } from 'redux/currencySlice';
import { pick } from 'lodash';
import Search from 'components/Search';
import BaseCurrencyContext from 'context/BaseCurrencyContext';

const Home = () => {
  const dispatch = useDispatch();
  const { rates } = useSelector((state) => state.currency);
  const { baseCurrency } = useContext(BaseCurrencyContext);
  const filteredRates = pick(rates,
    'AED', 'AUD', 'BDT', 'CAD', 'CHF', 'CNY', 'EUR',
    'GBP', 'INR', 'JPY', 'KWD', 'NZD', 'RMB');
  useEffect(() => {
    dispatch(fetchAllCurrencyAgainstBase(baseCurrency));
  }, [dispatch, baseCurrency]);
  return (
    <>
      <Search currencies={filteredRates} />

    </>
  );
};

export default Home;
