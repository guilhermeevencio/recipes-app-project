import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import whiteheart from '../../images/whiteHeartIcon.svg';
import fetchFromApi from '../../services/fetchFromApi';
import './styles.css';

const RecipeDetails = (props) => {
  const { pageName, recipe } = props;

  const [recomendations, setRecomentations] = useState();
  const [isADoneRecipe, setIsADoneRecipe] = useState(false);
  // const [isInProgress, setIsInProgress] = useState(false);

  useEffect(() => {
    const isDoneRecipe = JSON.parse(window.localStorage.getItem('doneRecipes'));
    if (isDoneRecipe) {
      setIsADoneRecipe(isDoneRecipe.some(({ id }) => id === recipe.id));
    }

    // const isInProgressRecipes = JSON
    //   .parse(window.localStorage.getItem('inProgressRecipes'));

    // const inProgressId = Object.values(isInProgressRecipes)
    //   .reduce((acc, obj) => [...acc, ...Object.keys(obj)], []);

    // if (isInProgressRecipes) {
    //   setIsInProgress(inProgressId.some((id) => id === recipe.id));
    // }

    const receiveDataFromApi = async () => {
      const recipes = await fetchFromApi(recipe.recomendationUrl);
      const numberOfRecomendations = 6;
      if (pageName === 'Foods') {
        const sixRecomentations = recipes.drinks.splice(0, numberOfRecomendations);
        const result = sixRecomentations
          .map(({ idDrink, strDrinkThumb, strDrink }) => (
            { id: idDrink, strThumb: strDrinkThumb, str: strDrink, page: 'drinks' }
          ));
        setRecomentations(result);
      }
      if (pageName === 'Drinks') {
        const sixRecomentations = recipes.meals.splice(0, numberOfRecomendations);
        const result = sixRecomentations
          .map(({ idMeal, strMealThumb, strMeal }) => (
            { id: idMeal, strThumb: strMealThumb, str: strMeal, page: 'foods' }
          ));
        setRecomentations(result);
      }
    };
    receiveDataFromApi();
  }, [pageName, recipe]);

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
      >
        <img src={ shareIcon } alt="Share" />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        <img src={ whiteheart } alt="Favoritos" />
      </button>
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
            src="https://www.youtube.com/watch?v=W0bEL93tt4k"
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
          <button
            type="button"
            data-testid="start-recipe-btn"
          >
            Start Recipe
          </button>
        )}
    </div>
  );
};

RecipeDetails.propTypes = {
  pageName: PropTypes.string,
}.isRequired;

export default RecipeDetails;
