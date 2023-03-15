import React from 'react';
import { PropTypes } from 'prop-types';
import CurrencyCard from 'components/CurrencyCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Cards = ({ rate }) => {
  console.log(rate);
  return (
    <Container className="p-2">
      <Row className="g-4">
        <Col>
          { Object.keys(rate).length > 1
     && Object.keys(rate).map(
       (currency) => (
         <CurrencyCard key={currency} currency={currency} rate={rate[currency]} />
       ),
     )}
        </Col>
      </Row>
    </Container>
  );
};
Cards.propTypes = { rate: PropTypes.objectOf(PropTypes.number).isRequired };

export default Cards;
