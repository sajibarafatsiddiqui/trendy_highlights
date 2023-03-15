import React from 'react';
import { PropTypes } from 'prop-types';
import CurrencyCard from 'components/CurrencyCard';
import { Row, Col } from 'react-bootstrap';

const Cards = ({ rate }) => (
  <Row xs={2} md={2} className="g-4">

    { Object.keys(rate).length > 1
     && Object.keys(rate).map(
       (currency) => (
         <Col key={currency}>
           <CurrencyCard currency={currency} rate={rate[currency]} />
         </Col>
       ),
     )}

  </Row>
);
Cards.propTypes = { rate: PropTypes.objectOf(PropTypes.number).isRequired };

export default Cards;
