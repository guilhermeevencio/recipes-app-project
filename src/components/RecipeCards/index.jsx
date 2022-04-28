import React, { useEffect, useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const TWELVE = 12;

function RecipeCardInSearchBar({ cardData }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const response = cardData || [];
    const newResponse = [...response];
    const returned = newResponse.splice(0, TWELVE);
    setCards(returned);
  }, [cardData]);

  return (
    <div className="recipecard-container">
      {cards.map(({ id, strThumb, str }, index) => (
        <div
          key={ id }
          data-testid={ `${index}-recipe-card` }
        >
          <div
            data-testid={ `${index}-card-name` }
          >
            {str}
          </div>
          <img
            width={ 70 }
            src={ strThumb }
            alt={ str }
            data-testid={ `${index}-card-img` }
          />
        </div>
      ))}
    </div>
  );
}

RecipeCardInSearchBar.propTypes = {
  dataFromApiSearch: PropTypes.array,
}.isRequired;

export default RecipeCardInSearchBar;
