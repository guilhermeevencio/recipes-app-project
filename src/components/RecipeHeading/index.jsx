import React, { useContext } from 'react';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
// import blackHeart from '../../images/blackHeartIcon.svg';
import AppContext from '../../context/MyContext';

const RecipeHeading = () => {
  const { recipeDetails } = useContext(AppContext);
  return (
    <div style={ { border: '1px solid red' } }>
      <img
        src={ recipeDetails.strThumb }
        alt="Recipe Thumb"
        data-testid="recipe-photo"
        width="100%"
      />
      <h2 data-testid="recipe-title">{ recipeDetails.str }</h2>
      <button type="button" data-testid="share-btn">
        <img src={ shareIcon } alt="share button" />
      </button>
      <button type="button" data-testid="favorite-btn">
        <img src={ whiteHeart } alt="share button" />
      </button>
      <p data-testid="recipe-category">{ recipeDetails.category }</p>
    </div>
  );
};

export default RecipeHeading;
