import React from 'react';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
// import blackHeart from '../../images/blackHeartIcon.svg';

const RecipeHeading = () => {
  console.log('teste');
  return (
    <div style={ { border: '1px solid red' } }>
      <img src="" alt="Recipe Thumb" data-testid="recipe-photo" />
      <h2 data-testid="recipe-title">Recipe Title</h2>
      <button type="button" data-testid="share-btn">
        <img src={ shareIcon } alt="share button" />
      </button>
      <button type="button" data-testid="favorite-btn">
        <img src={ whiteHeart } alt="share button" />
      </button>
      <p data-testid="recipe-category">Recipe Category</p>
    </div>
  );
};

export default RecipeHeading;
