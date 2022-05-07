import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareImg from '../../images/shareIcon.svg';

const DoneRecipeCard = (props) => {
  const { recipe, index } = props;
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  return (
    <div>
      <Link to={ `/${recipe.type}s/${recipe.id}` }>
        <img
          src={ recipe.image }
          alt="Recipe Item"
          data-testid={ `${index}-horizontal-image` }
          width="80%"
        />
      </Link>
      <div>
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {recipe.type === 'food'
            ? `${recipe.nationality} - ${recipe.category}`
            : `${recipe.alcoholicOrNot}`}
        </p>
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <h4
            data-testid={ `${index}-horizontal-name` }
          >
            {recipe.name}
          </h4>
        </Link>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          {recipe.doneDate}
        </p>
        <button
          type="button"
          onClick={ () => {
            navigator.clipboard.writeText(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
            setIsLinkCopied(true);
          } }
        >
          <img
            src={ shareImg }
            alt="share icon"
            data-testid={ `${index}-horizontal-share-btn` }
          />
        </button>
        {isLinkCopied && <p>Link copied!</p>}
        {recipe.type === 'food'
        && recipe.tags.filter((_e, i) => i < 2).map((tag) => (
          <div key={ tag }>
            <p
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              {tag}
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
