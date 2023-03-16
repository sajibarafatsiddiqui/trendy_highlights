import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Card } from 'react-bootstrap';
import style from 'styles/CurrencyCard.module.css';
import { NavLink } from 'react-router-dom';
import BaseCurrencyContext from 'context/BaseCurrencyContext';

const CurrencyCard = ({ currency, rate }) => {
  const { baseCurrency } = useContext(BaseCurrencyContext);
  return (
    <Card className={style[currency]}>
      <Card.Body>
        <NavLink to={`/details/${baseCurrency}-${currency}`} state={rate}>
          <Card.Title>{ currency }</Card.Title>
          <Card.Text>
            { rate }
          </Card.Text>
          <div className="currency__icon">
            <span className="material-symbols-outlined">
              arrow_right_alt
            </span>
          </div>
        </NavLink>

      </Card.Body>
    </Card>

  );
};
CurrencyCard.propTypes = {
  currency: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};
export default CurrencyCard;
