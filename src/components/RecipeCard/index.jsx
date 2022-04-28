import React, { useEffect, useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const TWELVE = 12;
// const FIVE = 5;
// const FOR = 4;

function RecipeCard({ cardData }) {
  const [cards, setCards] = useState([]);
  // const [cards12, setCard12] = useState([]);
  // const [indexList, setIndexList] = useState(FOR);

  useEffect(() => {
    const response = cardData || [];
    console.log(response);
    const newResponse = [...response];
    const returned = newResponse.splice(0, TWELVE);
    setCards(returned);
    // setCard12(returned);
  }, [cardData]);

  // const hadleNext = () => {
  //   const arr = [...cards];
  //   const result = arr.splice(indexList, FIVE);
  //   console.log(arr);
  //   const newIndexList = indexList + FIVE;
  //   setIndexList(newIndexList);
  //   setCard12(result);
  // };

  return (
    <div className="recipecard-container">
      <h1>RecipeCard</h1>
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
      {/* <button
        type="button"
        onClick={ handlePrev }
      >
        Prev
      </button> */}
      {/* <button
        type="button"
        onClick={ hadleNext }
      >
        Next
      </button> */}
    </div>
  );
}

RecipeCard.propTypes = {
  dataFromApiSearch: PropTypes.array,
}.isRequired;

export default RecipeCard;
