import React, { useEffect, useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TWELVE = 12;

function RecipeCards({ cardData, currentPage }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const response = cardData || [];
    console.log(cardData);
    const newResponse = [...response];
    const returned = newResponse.splice(0, TWELVE);
    setCards(returned);
  }, [cardData]);

  return (
    <div className="recipecard-container">
      {cards.map(({ id, strThumb, str }, index) => (
        <Link key={ id } to={ `/${currentPage}/${id}` }>
          <div data-testid={ `${index}-recipe-card` }>
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
        </Link>
      ))}
    </div>
  );
}

RecipeCards.propTypes = {
  dataFromApiSearch: PropTypes.array,
  currentPage: PropTypes.string,
}.isRequired;

export default RecipeCards;
