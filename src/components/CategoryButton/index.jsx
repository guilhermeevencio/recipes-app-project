import React from 'react';
import PropTypes from 'prop-types';

function CategoryButton({ category, callBack }) {
  return (
    <button
      type="button"
      data-testid={ `${category}-category-filter` }
      onClick={
        () => callBack(category)
      }
    >
      {category}
    </button>
  );
}

CategoryButton.propTypes = {
  category: PropTypes.array,
}.isRequired;

export default CategoryButton;
