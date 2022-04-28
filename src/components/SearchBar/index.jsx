import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../../context/MyContext';
import { fetchFromApi } from '../../services/fetchFromApi';
import RecipeCards from '../RecipeCards';

const FIRST_LETTER = 'First Letter';

const SearchBar = (props) => {
  const { page } = props;
  const { setDataFromApiSearch, dataFromApiSearch } = useContext(AppContext);

  const [radioSelected, setRadioSelected] = useState('Ingredient');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [cardData, setCardData] = useState([]);

  const history = useHistory();

  const handleSelected = (event) => {
    setRadioSelected(event.currentTarget.value);
  };

  useEffect(() => {
    if (radioSelected === FIRST_LETTER && searchInputValue.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  }, [searchInputValue, radioSelected]);

  useEffect(() => {
    if (dataFromApiSearch.meals) {
      const result = dataFromApiSearch.meals.map(({ idMeal, strMealThumb, strMeal }) => (
        { id: idMeal, strThumb: strMealThumb, str: strMeal }
      ));
      setCardData(result);
    }
    if (dataFromApiSearch.drinks) {
      const result = dataFromApiSearch.drinks.map(
        ({ idDrink, strDrinkThumb, strDrink }) => (
          { id: idDrink, strThumb: strDrinkThumb, str: strDrink }
        ),
      );
      setCardData(result);
    }
  }, [dataFromApiSearch]);

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
    if (dataFromApi.meals === null || dataFromApi.drinks === null) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    setDataFromApiSearch(dataFromApi);
    if (page === 'Foods' && dataFromApi.meals.length === 1) {
      history.push(`/foods/${dataFromApi.meals[0].idMeal}`);
    }
    if (page === 'Drinks' && dataFromApi.drinks.length === 1) {
      history.push(`/drinks/${dataFromApi.drinks[0].idDrink}`);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="search-input"
          onChange={ handleSearchValue }
          value={ searchInputValue }
        />
        <label htmlFor="ingredient-search-radio">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            id="ingredient-search-radio"
            name="filter"
            value="Ingredient"
            defaultChecked
            onChange={ handleSelected }
          />
          {' '}
          Ingredient
        </label>
        <label htmlFor="name-search-radio">
          <input
            type="radio"
            data-testid="name-search-radio"
            id="name-search-radio"
            name="filter"
            value="Name"
            onChange={ handleSelected }
          />
          {' '}
          Name
        </label>
        <label htmlFor="first-letter-search-radio">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            id="first-letter-search-radio"
            name="filter"
            value={ FIRST_LETTER }
            onChange={ handleSelected }
          />
          {' '}
          First Letter
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleSubmit }
        >
          Search
        </button>
      </div>
      {dataFromApiSearch && <RecipeCards cardData={ cardData } />}
    </div>
  );
};

SearchBar.propTypes = {
  page: PropTypes.string,
}.isRequired;

export default SearchBar;
