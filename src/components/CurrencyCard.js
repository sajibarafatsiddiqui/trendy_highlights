import React from 'react';
import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CurrencyCard = ({ currency, rate }) => (
  <Row sm={2} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{ currency }</Card.Title>
          <Card.Text>{ rate }</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);
CurrencyCard.propTypes = {
  currency: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};
export default CurrencyCard;
