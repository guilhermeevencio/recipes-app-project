import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const THREE_SECOND = 3000;

const FavoriteRecipes = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  useEffect(() => {
    const result = localStorage.getItem('favoriteRecipes');
    const favoritesFromLocalStorage = JSON.parse(result);
    setFavorites(favoritesFromLocalStorage);
  }, []);

  // useEffect de CONSOLE LOG
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const handleShareBtn = (url) => {
    setIsLinkCopied(true);
    setTimeout(() => setIsLinkCopied(false), THREE_SECOND);
    navigator.clipboard.writeText(url);
  };

  return (
    <div>
      <Header pageName="Favorite Recipes" searchEnabled={ false } />
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drink
      </button>

      {favorites && favorites.map((
        { id, image, name, nationality, category, type, alcoholicOrNot }, index,
      ) => (
        <div key={ id }>
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ image }
            alt={ name }
            width={ 90 }
          />

          <div>
            <div data-testid={ `${index}-horizontal-top-text` }>
              { type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
            </div>
            <div data-testid={ `${index}-horizontal-name` }>{name}</div>
            <button
              type="button"
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              onClick={ () => handleShareBtn(`http://localhost:3000/${type}s/${id}`) }
            >
              <img src={ shareIcon } alt="Botão de compartilhar" />
            </button>
            <button
              type="button"
              data-testid={ `${index}-horizontal-favorite-btn` }
              src={ blackHeartIcon }
            >
              <img
                src={ blackHeartIcon }
                alt="Botão de favoritar"
              />
            </button>
            {isLinkCopied && <div>Link copied!</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

FavoriteRecipes.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default FavoriteRecipes;
