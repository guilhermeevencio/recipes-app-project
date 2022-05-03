import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckBoxItem = (props) => {
  const { id, value } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <input
      type="checkbox"
      id={ id }
      value={ value }
      onChange={ () => setIsChecked(!isChecked) }
    />
  );
};

CheckBoxItem.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default CheckBoxItem;
