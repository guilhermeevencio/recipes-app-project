import React, { useContext, useState } from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import AppContext from '../../context/MyContext';
import favoriteToLocalStorageHelper from '../../helpers/favoriteToLocalStorageHelper';
import useLocalStorage from '../../customHooks/useLocalStorage';

const RecipeHeading = () => {
  const {
    recipeDetails,
    setRecipeStatusInfo,
    recipeStatusInfo } = useContext(AppContext);

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorage('favoriteRecipes', []);

  const handleFavorite = () => {
    const favoriteRecipeData = favoriteToLocalStorageHelper(recipeDetails);
    console.log(recipeDetails);

    switch (recipeStatusInfo.isFavorite) {
    case true:
      setFavoriteRecipes(favoriteRecipes
        .filter(({ id }) => id && id !== recipeDetails.id));
      setRecipeStatusInfo({
        ...recipeStatusInfo,
        isFavorite: false,
      });
      break;
    default:
      setFavoriteRecipes([...favoriteRecipes, favoriteRecipeData]);
      setRecipeStatusInfo({
        ...recipeStatusInfo,
        isFavorite: !recipeStatusInfo.isFavorite,
      });
      break;
    }
  };

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
          <p data-testid="recipe-category">{recipeDetails.category}</p>
          <button
            type="button"
            onClick={ () => {
              navigator.clipboard.writeText(`http://localhost:3000/${recipeDetails.page}/${recipeDetails.id}`);
              setIsLinkCopied(true);
            } }
          >
            <img src={ shareIcon } alt="share button" data-testid="share-btn" />
          </button>
          <button
            type="button"
            onClick={ handleFavorite }
          >
            <img
              src={ recipeStatusInfo.isFavorite ? blackHeartIcon : whiteHeartIcon }
              alt="favorite button"
              data-testid="favorite-btn"
            />
          </button>
          {isLinkCopied && <p>Link copied!</p>}
        </>
      )}
    </div>
  );
};

export default RecipeHeading;
