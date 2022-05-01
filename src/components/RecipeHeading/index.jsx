import React, { useContext } from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import AppContext from '../../context/MyContext';

const RecipeHeading = () => {
  const {
    recipeDetails,
    recipeStatusInfo: {
      isFavorite,
    } } = useContext(AppContext);

  // const [favoriteRecipes] = useLocalStorage('favoriteRecipes', []);

  // useEffect(() => {
  //   if (recipeDetails) {
  //     const filteredFavorites = favoriteRecipes
  //       .filter(({ id }) => id !== recipeDetails.id);
  //   }
  // }, []);

  return (
    <div style={ { border: '1px solid red' } }>
      {recipeDetails
      && (
        <>
          <img
            src={ recipeDetails.strThumb }
            alt="Recipe Thumb"
            data-testid="recipe-photo"
            width="100%"
          />
          <h2 data-testid="recipe-title">{recipeDetails.str}</h2>
          <button type="button" data-testid="share-btn">
            <img src={ shareIcon } alt="share button" />
          </button>
          <button type="button">
            <img
              src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
              alt="favorite button"
              data-testid="favorite-btn"
            />
          </button>
          <p data-testid="recipe-category">{recipeDetails.category}</p>
        </>
      )}
    </div>
  );
};

export default RecipeHeading;
