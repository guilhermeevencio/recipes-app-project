import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetails = (props) => {
  const { pageName } = props;
  return (
    <div>
      <img src="" alt="Foto da receita" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">
        Recipe title
      </h1>
      <button
        type="button"
        data-testid="share-btn"
      >
        compartilhar
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        favoritos
      </button>
      <p data-testid="recipe-category">
        Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Dicta magni repellendus tempora repellat
        ducimus ipsum sint unde accusantium, soluta omnis.
        Voluptatibus quam in labore placeat debitis, provident sint accusantium veritatis.
      </p>
      <h3 data-testid="instructions">Instruções</h3>
      <ul>
        <li data-testid="0-ingredient-name-and-measure">1 dasffasdf</li>
        <li>2 gsdhgsgds</li>
        <li>3 fbsgbgsdg</li>
        <li>4 dasfsdfg </li>
      </ul>
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
