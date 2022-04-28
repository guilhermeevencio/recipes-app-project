import React from 'react';
import PropTypes from 'prop-types';

function CategorieButton({ categorie }) {
  return (
    <button type="button">
      {categorie}
    </button>
  );
}

CategorieButton.propTypes = {
  categorie: PropTypes.array,
}.isRequired;

export default CategorieButton;
