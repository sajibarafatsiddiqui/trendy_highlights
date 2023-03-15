import React from 'react';
import { PropTypes } from 'prop-types';
import { Card } from 'react-bootstrap';

const CurrencyCard = ({ currency, rate }) => (
  <Card>
    <Card.Body>
      <Card.Title>{ currency }</Card.Title>
      <Card.Text>{ rate }</Card.Text>
    </Card.Body>
  </Card>

);
CurrencyCard.propTypes = {
  currency: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};
export default CurrencyCard;
