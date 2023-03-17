import BaseCard from 'components/BaseCard';
import Cards from 'components/Cards';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCurrencyAgainstBase } from 'redux/currencySlice';
import { pick } from 'lodash';
import BaseCurrencyContext from 'context/BaseCurrencyContext';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import style from 'styles/CurrencyCard.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const { baseCurrency } = useContext(BaseCurrencyContext);
  const { rates } = useSelector((state) => state.currency);
  const filteredRates = pick(rates,
    'AED', 'AUD', 'BDT', 'CAD', 'CHF', 'CNY', 'EUR',
    'GBP', 'INR', 'JPY', 'KWD', 'NZD', 'RMB');
  useEffect(() => {
    dispatch(fetchAllCurrencyAgainstBase(baseCurrency));
  }, [dispatch, baseCurrency]);
  return (
    <>
      <p className={style.dark_header}>Exchange Rate</p>
      <Row xs={1} md={1} className="g-0">
        <BaseCard baseCurrency={baseCurrency} />
      </Row>
      <Row xs={1} md={1} className="g-0">
        <Card.Text className={style.dark}>Exchange Rate By Currency</Card.Text>
      </Row>
      <Cards rate={filteredRates} />
    </>
  );
};

export default Home;
