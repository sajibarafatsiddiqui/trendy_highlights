import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const dispatch = useDispatch();
  const { currencies } = useParams();
  const baseCurrency = currencies.split('-')[0];
  const currency = currencies.split('-')[1];
  const date = new Date();
  const endDate = date.toISOString().split('T')[0];
  date.setDate(date.getDate() - 30);
  const startDate = date.toISOString().split('T')[0];

  useEffect(() => {
    dispatch(fetchCurrencyHistoricalRateAgainstBase(baseCurrency, currency, startDate, endDate));
  }, [dispatch, baseCurrency]);

  return (
    <div />
  );
};

export default Details;
