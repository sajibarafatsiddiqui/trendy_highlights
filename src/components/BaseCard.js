import React from 'react';
import { PropTypes } from 'prop-types';
import style from 'styles/CurrencyCard.module.css';
import { Card, Col } from 'react-bootstrap';
import cx from 'classnames';

const BaseCard = ({ baseCurrency }) => (
  <>
    <Col>
      <Card className={cx(style[baseCurrency], style.BaseCard)}>
        <Card.Body>
          <Card.Title />
          <Card.Text />
          <Card.Footer><h1>{ baseCurrency }</h1></Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  </>
);

BaseCard.propTypes = { baseCurrency: PropTypes.string.isRequired };

export default BaseCard;
