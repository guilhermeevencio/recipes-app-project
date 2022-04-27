import React from 'react';
import PropTypes from 'prop-types';

const FoodDetails = () => {
  // const { match: { params: { id } } } = props;
  console.log('teste');
  return (
    <div>FoodDetails</div>
  );
};

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default FoodDetails;
