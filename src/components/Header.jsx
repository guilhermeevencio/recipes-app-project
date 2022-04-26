import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

const Header = () => {
  const [searchIsEnabled, setSearchIsEnabled] = useState(false);
  const handleSearchBar = () => {
    setSearchIsEnabled(!searchIsEnabled);
  };

  const history = useHistory();
  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
      >
        <img
          src={ profileIcon }
          alt="profile button"
        />
      </button>
      <h1
        data-testid="page-title"
      >
        Foods
      </h1>
      <button
        type="button"
        data-testid="search-top-btn"
        onClick={ handleSearchBar }
      >
        <img
          src={ searchIcon }
          alt="search button"
        />
      </button>
      {searchIsEnabled
        && <SearchBar /> }
    </header>
  );
};

export default Header;
