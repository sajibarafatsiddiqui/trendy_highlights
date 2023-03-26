import React, { useContext, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import BaseCard from 'components/BaseCard';
import Cards from 'components/Cards';
import BaseCurrencyContext from 'context/BaseCurrencyContext';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import searchStyle from 'styles/Search.module.css';
import style from 'styles/CurrencyCard.module.css';

function Search({ currencies, loading }) {
  const [search, setSearch] = useState(false);
  const [Currency, setCurrency] = useState('');
  const [filterByCurrency, setFilterByCurrency] = useState({});
  const { baseCurrency } = useContext(BaseCurrencyContext);

  const filter = (e) => {
    setSearch(true);
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = Object.keys(currencies).filter(
        (currency) => currency.toLowerCase().startsWith(keyword.toLowerCase()),
        // Use the toLowerCase() method to make it case-insensitive
      ).reduce((obj, key) => Object.assign(obj, {
        [key]: currencies[key],
      }), {});
      console.log(results);
      setFilterByCurrency(results);
        <Cards rate={currencies} />;
    } else {
      setFilterByCurrency(currencies);
      // If the text field is empty, show all users
    }
    setCurrency(keyword);
  };

  return (
    <>
      <div className={style.dark_header}>
        <div className="d-flex justify-content-between">
          <p className="m-2">Exchange Rate</p>
          <div className={`${searchStyle.searchbar} d-flex align-self-center m-2`}>
            <input
              className={searchStyle.search_input}
              type="search"
              value={Currency}
              onChange={filter}
              placeholder="Search Currency"
            />
            <FcSearch className={searchStyle.search_icon} size="20" />
          </div>
        </div>
      </div>
      <Row xs={1} md={1} className="g-0">
        <BaseCard baseCurrency={baseCurrency} />
      </Row>
      <Row xs={1} md={1} className="m-auto">
        <Card.Text className={`${style.dark} `}>Exchange Rate By Currency</Card.Text>
      </Row>
      {!search && (loading ? <p>Loading...</p> : <Cards rate={currencies} />)}
      {search && (Object.keys(filterByCurrency).length > 0
        ? <Cards rate={filterByCurrency} /> : <p>No currency found</p>)}
    </>
  );
}
Search.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.number).isRequired,
  loading: PropTypes.bool.isRequired,
};
export default Search;
