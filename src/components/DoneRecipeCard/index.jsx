import React from 'react';
import PropTypes from 'prop-types';
import shareImg from '../../images/shareIcon.svg';

const DoneRecipeCard = (props) => {
  const { recipe, index } = props;
  return (
    <div>
      <img
        src={ recipe.image }
        alt="Recipe Item"
        data-testid={ `${index}-horizontal-image` }
      />
      <div>
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          { recipe.category }
        </p>
        <h4
          data-testid={ `${index}-horizontal-name` }
        >
          { recipe.name }
        </h4>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          { recipe.doneDate }
        </p>
        <button
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
        >
          <img
            src={ shareImg }
            alt="share icon"
          />
        </button>
        {recipe.tags.map((tag) => (
          <div key={ tag }>
            <p
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              { tag }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({}),
}.isRequired;

export default DoneRecipeCard;
