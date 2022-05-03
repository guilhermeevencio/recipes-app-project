import React from 'react';
import PropTypes from 'prop-types';

function CategoryButton(props) {
  const { category, callBack, callBack2, currentCategoryFilter,
    setCurrentCategoryFilter } = props;

  const dynamicToggle = () => {
    const obj = {
      noFilter: () => { callBack(category); setCurrentCategoryFilter(category); },
      [category]: () => { callBack2(category); setCurrentCategoryFilter('noFilter'); },
    };
    if (obj[currentCategoryFilter]) obj[currentCategoryFilter]();
    else obj.noFilter();
  };

  return (
    <button
      type="button"
      data-testid={ `${category}-category-filter` }
      onClick={ dynamicToggle }
    >
      {category}
    </button>
  );
}

CategoryButton.propTypes = {
  category: PropTypes.array,
}.isRequired;

export default CategoryButton;
