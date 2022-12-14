import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import {
  removeFavoriteItemFromLocalStorageByIndex,
  getArrayOfFavoritesFromLocalStorage,
} from '../../helpers/localStorageHelpers';

const THREE_SECOND = 3000;

const FavoriteRecipes = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLinkCopied, setIsLinkCopied] = useState({ display: false, id: '' });
  const [filteredBy, setFilteredBy] = useState('all');

  useEffect(() => {
    const result = getArrayOfFavoritesFromLocalStorage();
    setFavorites(result);
  }, []);

  const handleShareBtn = (url, id) => {
    setIsLinkCopied({ display: true, id });
    setTimeout(() => setIsLinkCopied({ display: false, id: '' }), THREE_SECOND);
    navigator.clipboard.writeText(url);
  };

  const handleFavoriteBtn = (favoriteIndex) => {
    const result = removeFavoriteItemFromLocalStorageByIndex(favoriteIndex);
    setFavorites(result);
  };

  return (
    <div>
      <Header pageName="Favorite Recipes" searchEnabled={ false } />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilteredBy('all') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilteredBy('food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilteredBy('drink') }
        >
          Drink
        </button>
      </div>

      {favorites && favorites
        .filter(({ type }) => (filteredBy === 'all' ? true : type === filteredBy))
        .map((
          { id, image, name, nationality, category, type, alcoholicOrNot }, index,
        ) => (
          <div key={ id }>
            <Link to={ `/${type}s/${id}` }>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ image }
                alt={ name }
                width={ 90 }
              />
              <div data-testid={ `${index}-horizontal-top-text` }>
                { type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
              </div>
              <div data-testid={ `${index}-horizontal-name` }>{name}</div>
            </Link>

            <div>
              <button
                type="button"
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                onClick={ () => handleShareBtn(`http://localhost:3000/${type}s/${id}`, id) }
              >
                <img src={ shareIcon } alt="Bot??o de compartilhar" />
              </button>
              <button
                type="button"
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
                onClick={ () => handleFavoriteBtn(index) }
              >
                <img
                  src={ blackHeartIcon }
                  alt="Bot??o de desfavoritar"
                />
              </button>

              {(isLinkCopied.display && isLinkCopied.id === id)
                && <div>Link copied!</div>}
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
