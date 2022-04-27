import React, { useContext, useState } from 'react';
import AppContext from '../context/MyContext';

const SearchBar = () => {
  const { pageName } = useContext(AppContext);
  const [radioSelected, setRadioSelected] = useState('');
  console.log(pageName);
  const handleSelected = (event) => {
    setRadioSelected(event.currentTarget.value);
  };

  return (
    <div>
      {console.log(radioSelected)}
      <input
        type="text"
        data-testid="search-input"
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
          value="First Letter"
          onChange={ handleSelected }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
