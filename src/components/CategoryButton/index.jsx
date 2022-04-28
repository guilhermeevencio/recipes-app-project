import React from 'react';
import PropTypes from 'prop-types';

function CategoryButton({ category }) {
  return (
    <button
      type="button"
      data-testid={ `${category}-category-filter` }
    >
      {category}
    </button>
  );
}

CategoryButton.propTypes = {
  category: PropTypes.array,
}.isRequired;

export default CategoryButton;
