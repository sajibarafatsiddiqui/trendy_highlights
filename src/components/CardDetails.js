import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import style from 'styles/Details.module.css';

const CardDetails = ({
  startDate, historyRate, today, liveRate,
}) => (
  <Row xs={1} md={1} className={style.details_currency}>
    <Col className="d-flex justify-content-between flex-1">
      <p className="text-start m-3">History Date</p>
      <p className="text-end m-3">{startDate}</p>
    </Col>
    <Col className="d-flex justify-content-between">
      <Card.Text className="text-start m-3">History Rate</Card.Text>
      <p className="text-end m-3">{historyRate}</p>
    </Col>
    <Col className="d-flex justify-content-between">
      <p className="text-start m-3">Current Date</p>
      <p className="text-end m-3">{today}</p>
    </Col>
    <Col className="d-flex justify-content-between">
      <p className="text-start m-3">Latest Rate</p>
      <p className="text-end m-3">{liveRate}</p>
    </Col>
    <Col className="d-flex justify-content-between">
      <p className="text-start m-3">Rate Changed</p>
      <p className="text-end m-3">{(liveRate - historyRate).toFixed(4)}</p>
    </Col>
    <Col>
      {(liveRate - historyRate).toFixed(4) > 0 ? (
        <p className="text-center text-success">
          Rate is increased by &nbsp;
          {(liveRate - historyRate).toFixed(4)}
        </p>
      )
        : (
          <p className="text-center text-danger">
            Rate is decreaded by &nbsp;
            {(-1) * (liveRate - historyRate).toFixed(4)}
          </p>
        )}
    </Col>
  </Row>
);

CardDetails.propTypes = {
  startDate: PropTypes.string.isRequired,
  historyRate: PropTypes.number.isRequired,
  today: PropTypes.string.isRequired,
  liveRate: PropTypes.number.isRequired,
};

export default CardDetails;
