import React from 'react';
import { PropTypes } from 'prop-types';

const BaseCard = ({ baseCurrency }) => (
  <div>{ baseCurrency }</div>
);

BaseCard.propTypes = { baseCurrency: PropTypes.string.isRequired };

export default BaseCard;
