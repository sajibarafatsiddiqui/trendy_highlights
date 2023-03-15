import BaseCard from 'components/baseCard';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCurrencyAgainstBase } from 'redux/currencySlice';

const Home = () => {
  const dispatch = useDispatch();
  const baseCurrency = 'USD';
  const { rate } = useSelector( (state) => state.currency )
  useEffect( () => dispatch( fetchAllCurrencyAgainstBase( {baseCurrency}) ),[ baseCurrency,dispatch])
  return (
    <div>
        <BaseCard baseCurrency={ baseCurrency } />
        <Cards rate = {rate} />
    </div>
  )
}

export default Home