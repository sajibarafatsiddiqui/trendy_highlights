import React from 'react';
import { PropTypes } from 'prop-types';
import CurrencyCard from 'components/CurrencyCard';
import { Row, Col } from 'react-bootstrap';

let isDark = false;

const Cards = ({ rate }) => {
  const dark = (idx) => {
    if (idx % 2 !== 0) {
      isDark = !isDark;
      window.isDark = isDark;
      return isDark;
    }
    if (idx % 2 === 0) {
      return isDark;
    }
    return isDark;
  };

  return (
    <Row xs={2} md={2} className="g-0">

      { Object.keys(rate).length > 1
     && Object.keys(rate).map(
       (currency, idx) => (

         <Col key={currency}>
           <CurrencyCard currency={currency} rate={rate[currency]} isDark={dark(idx)} />
         </Col>
       ),
     )}

    </Row>
  );
};
Cards.propTypes = { rate: PropTypes.objectOf(PropTypes.number).isRequired };

export default Cards;
