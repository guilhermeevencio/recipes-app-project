import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteheart from '../../images/whiteHeartIcon.svg';

const RecipeDetails = (props) => {
  const { pageName, recipe } = props;
  return (
    <div>
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
        {recipe.ingredients.filter((ing) => !!ing).map((ing, index) => (
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
        <div data-testid="0-recomendation-card">recomandada 1</div>
        <div data-testid="1-recomendation-card">recomandada 1</div>
      </section>
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar receita
      </button>
    </div>
  );
};

RecipeDetails.propTypes = {
  pageName: PropTypes.string,
}.isRequired;

export default RecipeDetails;
