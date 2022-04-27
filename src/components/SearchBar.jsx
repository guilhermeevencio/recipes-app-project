import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../context/MyContext';
import fetchFromApi from '../services/fetchFromApi';

const FIRST_LETTER = 'First Letter';

const SearchBar = (props) => {
  const { page } = props;
  const { setDataFromApiSearch } = useContext(AppContext);

  const [radioSelected, setRadioSelected] = useState('Ingredient');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [endpoint, setEndpoint] = useState('');

  const history = useHistory();

  const handleSelected = (event) => {
    setRadioSelected(event.currentTarget.value);
    if (event.target.value === FIRST_LETTER && searchInputValue.length + 1 > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const handleWithURL = () => {
    switch (radioSelected) {
    case 'Ingredient':
      setEndpoint('filter.php?i=');
      break;
    case 'Name':
      setEndpoint('search.php?s=');
      break;
    case FIRST_LETTER:
      setEndpoint('search.php?f=');
      break;

    default:
      break;
    }
  };

  const handleSearchValue = (event) => {
    setSearchInputValue(event.target.value);
    handleWithURL();
    if (radioSelected === FIRST_LETTER && searchInputValue.length + 1 > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const handleSubmit = async () => {
    let url = '';
    if (page === 'Foods') {
      url = 'https://www.themealdb.com/api/json/v1/1/';
    }
    if (page === 'Drinks') {
      url = 'https://www.thecocktaildb.com/api/json/v1/1/';
    }
    const fullUrl = url + endpoint + searchInputValue;
    const dataFromApi = await fetchFromApi(fullUrl);
    setDataFromApiSearch(dataFromApi);
    if (dataFromApi.meals.length === 1 && page === 'Foods') {
      history.push(`/foods/${dataFromApi.meals[0].idMeal}`);
    }

    if (dataFromApi.drinks.length === 1 && page === 'Drinks') {
      history.push(`/drinks/${dataFromApi.drinks[0].idDrink}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        onChange={ handleSearchValue }
        value={ searchInputValue }
      />
      <label htmlFor="ingredient-search-radio">
        Ingredient
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          name="filter"
          value="Ingredient"
          defaultChecked
          onChange={ handleSelected }
        />
      </label>
      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name-search-radio"
          name="filter"
          value="Name"
          onChange={ handleSelected }
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        First Letter
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          name="filter"
          value={ FIRST_LETTER }
          onChange={ handleSelected }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSubmit }
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  page: PropTypes.string,
}.isRequired;

export default SearchBar;
