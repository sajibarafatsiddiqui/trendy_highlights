import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Card } from 'react-bootstrap';
import style from 'styles/CurrencyCard.module.css';
import { NavLink } from 'react-router-dom';
import BaseCurrencyContext from 'context/BaseCurrencyContext';
import cx from 'classnames';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const CurrencyCard = ({ currency, rate, isDark }) => {
  const { baseCurrency } = useContext(BaseCurrencyContext);
  console.log(isDark);
  return (
    <Card style={{ backgroundColor: isDark ? '#CF4277' : '#e94987', padding: '0' }} className={cx(style[currency], style.Card)}>
      <Card.Body style={{ margin: '0' }}>
        <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`/details/${baseCurrency}-${currency}`} state={rate}>
          <IoArrowForwardCircleOutline style={{
            top: '0', right: '0', position: 'absolute',
          }}
          />
          <Card.Title />
          <Card.Text>{ currency }</Card.Text>
          <Card.Footer style={{
            bottom: '0', right: '0', position: 'absolute',
          }}
          >
            { Number(rate).toFixed(4) }
          </Card.Footer>

        </NavLink>

      </Card.Body>
    </Card>

  );
};
CurrencyCard.propTypes = {
  currency: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  isDark: PropTypes.bool.isRequired,
};
export default CurrencyCard;
