import React, { useEffect, useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// const TWELVE = 12;

function RecipeCards({ cardData }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // console.log(cardData);
    // const response = cardData || [];
    // const newResponse = [...response];
    // const returned = newResponse.splice(0, TWELVE);
    // console.log(returned);
    setCards(cardData);
  }, [cardData]);

  return (
    <div className="recipecard-container">
      {/* {console.log(cards)} */}
      {cards.map(({ id, strThumb, str, page }, index) => (
        <Link key={ id } to={ `/${page}/${id}` }>
          <div data-testid={ `${index}-recipe-card` }>
            <div data-testid={ `${index}-card-name` }>
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
