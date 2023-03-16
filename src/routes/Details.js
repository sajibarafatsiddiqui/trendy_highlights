import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { fetchHistoricalCurrencyAgainstBase } from 'redux/currencySlice';

const Details = () => {
  const dispatch = useDispatch();
  const { currencies } = useParams();
  const { historyRate } = useSelector((state) => state.currency);
  const baseCurrency = currencies.split('-')[0];
  const currency = currencies.split('-')[1];
  const date = new Date();
  date.setDate(date.getDate() - 30);
  const startDate = date.toISOString().split('T')[0];
  console.log(startDate);
  const data = { baseCurrency, currency, startDate };
  const location = useLocation();
  const liveRate = location.state;

  useEffect(() => {
    dispatch(fetchHistoricalCurrencyAgainstBase(data));
  }, [dispatch, currency, baseCurrency, startDate]);

  return (
    <div>
      <p>{startDate}</p>
      <p>{historyRate}</p>
      <p>{liveRate}</p>
    </div>

  );
};

export default Details;
