import BaseCard from 'components/BaseCard';
import CardDetails from 'components/CardDetails';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchHistoricalCurrencyAgainstBase } from 'redux/currencySlice';
import { IoIosArrowBack } from 'react-icons/io';
import { Col, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import style from 'styles/Details.module.css';

const Details = () => {
  const dispatch = useDispatch();
  const { currencies } = useParams();
  const navigate = useNavigate();
  const { historyRate } = useSelector((state) => state.currency);
  const baseCurrency = currencies.split('-')[0];
  const currency = currencies.split('-')[1];
  const date = new Date();
  const today = date.toISOString().split('T')[0];
  date.setDate(date.getDate() - 30);
  const startDate = date.toISOString().split('T')[0];
  const data = { baseCurrency, currency, startDate };
  const location = useLocation();
  const liveRate = location.state;

  useEffect(() => {
    dispatch(fetchHistoricalCurrencyAgainstBase(data));
  }, [dispatch, currency, baseCurrency, startDate]);

  return (
    <section>
      <Row xs={2} md={2} className={style.dark_header}>
        <IconContext.Provider
          value={{ color: 'white', size: '1.5rem' }}
        >
          <Col className="col-2" onClick={() => navigate(-1)}>

            <IoIosArrowBack />

          </Col>
        </IconContext.Provider>
        <h2 className="col-10 m-auto">
          Base Currency:
          {baseCurrency}
        </h2>
      </Row>
      <BaseCard baseCurrency={currency} />
      <p className={style.dark}>Stats of Currency</p>
      <CardDetails
        startDate={startDate}
        historyRate={historyRate}
        today={today}
        liveRate={liveRate}
      />
    </section>

  );
};

export default Details;
