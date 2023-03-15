import { Route, Routes } from 'react-router-dom';
import Home from 'routes/Home';
import Details from 'routes/Details';
import BaseCurrencyContext from 'context/BaseCurrencyContext';
import { useState } from 'react';

const App = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  return (
    <BaseCurrencyContext.Provider value={{ baseCurrency, setBaseCurrency }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:currencies" element={<Details />} />
      </Routes>
    </BaseCurrencyContext.Provider>
  );
};
export default App;
