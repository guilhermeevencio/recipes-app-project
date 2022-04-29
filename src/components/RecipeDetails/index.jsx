import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import whiteheart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
// import fetchFromApi from '../../services/fetchFromApi';
import fetchRecomendations from '../../services/fetchRecommendations';
import './styles.css';

const RecipeDetails = (props) => {
  const { pageName, recipe } = props;

  const [recomendations, setRecomentations] = useState();
  const [isADoneRecipe, setIsADoneRecipe] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isFavorite, setisFavorite] = useState(false);
  // const [isInProgress, setIsInProgress] = useState(false);

  useEffect(() => {
    const isDoneRecipe = JSON.parse(window.localStorage.getItem('doneRecipes'));
    if (isDoneRecipe) {
      setIsADoneRecipe(isDoneRecipe.some(({ id }) => id === recipe.id));
    }

    const favoriteItems = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteItems && favoriteItems.some(({ id }) => id === recipe.id)) {
      setisFavorite(true);
    }
  }, [recipe.id]);

  useEffect(() => {
    // const isInProgressRecipes = JSON
    //   .parse(window.localStorage.getItem('inProgressRecipes'));

    // const inProgressId = Object.values(isInProgressRecipes)
    //   .reduce((acc, obj) => [...acc, ...Object.keys(obj)], []);

    // if (isInProgressRecipes) {
    //   setIsInProgress(inProgressId.some((id) => id === recipe.id));
    // }

    const receiveDataFromApi = async () => {
      const results = await fetchRecomendations(recipe.recomendationUrl, pageName);
      setRecomentations(results);
    };
    receiveDataFromApi();
  }, [pageName, recipe]);

  const handleFavoriteRecipes = () => {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(favoriteItems);
    const filteredFavorites = favoriteItems
      .filter(({ id }) => id !== recipe.id);

    switch (isFavorite) {
    case true:
      localStorage.setItem('favoriteRecipes', JSON.stringify(filteredFavorites));
      setisFavorite(false);
      break;
    default:
      setisFavorite(true);
      localStorage.setItem('favoriteRecipes', JSON.stringify(
        [
          ...favoriteItems,
          {
            id: recipe.id,
            type: recipe.type,
            nationality: recipe.nationality,
            category: recipe.category,
            alcoholicOrNot: recipe.alcoholic,
            name: recipe.str,
            image: recipe.strThumb,
          }],
      ));
      break;
    }
  };

  return (
    <div className="recipe-details-container">
      <img
        src={ recipe.strThumb }
        width="400px"
        alt="Foto da receita"
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">
        { recipe.str }
      </h2>
      <h3 data-testid="recipe-category">{ recipe.category }</h3>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => {
          navigator.clipboard.writeText(`http://localhost:3000/${recipe.page}/${recipe.id}`);
          setIsLinkCopied(true);
        } }
      >
        <img src={ shareIcon } alt="Share" />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ handleFavoriteRecipes }
      >
        <img src={ !isFavorite ? whiteheart : blackHeart } alt="Favoritos" />
      </button>
      {isLinkCopied && <p>Link copied!</p>}
      <h3>Ingredientes</h3>
      <ul>
        {recipe.ingredients.filter((ing) => ing).map((ing, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${ing} - ${recipe.measures[Number(index)]}` }
          </li>
        ))}
      </ul>
      <h3>Instruções</h3>
      <p data-testid="instructions">
        { recipe.instructions }
      </p>
      {pageName === 'Foods'
        && (
          <video
            src=""
            data-testid="video"
          >
            <track
              default
              kind="captions"
              srcLang="en"
              src="/media/examples/friday.vtt"
            />
          </video>)}
      <section>
        <h3> Receitas recomendadas</h3>
        <div className="carousel-container">
          {recomendations
            && recomendations.map(({ id, strThumb, str, page }, index) => (
              <Link
                to={ `/${page}/${id}` }
                key={ id }
                id={ id }
                className="recomendation-card"
                data-testid={ `${index}-recomendation-card` }
              >
                <div
                  data-testid={ `${index}-recomendation-title` }
                >
                  {str}
                </div>
                <img
                  width={ 70 }
                  src={ strThumb }
                  alt={ str }
                  data-testid={ `${index}-card-img` }
                />
              </Link>
            ))}
        </div>
      </section>
      {!isADoneRecipe
        && (
          <Link
            to={ `/${recipe.page}/${recipe.id}/in-progress` }
            type="button"
            data-testid="start-recipe-btn"
          >
            Start Recipe
          </Link>
        )}
    </div>
  );
};

RecipeDetails.propTypes = {
  pageName: PropTypes.string,
}.isRequired;

export default RecipeDetails;
