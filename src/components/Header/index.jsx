import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar';

const Header = (props) => {
  const { pageName, searchEnabled } = props;
  const [searchIsEnabled, setSearchIsEnabled] = useState(false);
  const handleSearchBar = () => {
    setSearchIsEnabled(!searchIsEnabled);
  };

  const history = useHistory();
  return (
    <header>
      <button
        type="button"
        onClick={ () => history.push('/profile') }
      >
        <img
          src={ profileIcon }
          data-testid="profile-top-btn"
          alt="profile button"
        />
      </button>
      <h1
        data-testid="page-title"
      >
        { pageName }
      </h1>
      {searchEnabled
        && (
          <button
            type="button"
            onClick={ handleSearchBar }
            src={ searchIcon }
          >
            <img
              src={ searchIcon }
              alt="search button"
              data-testid="search-top-btn"
            />
          </button>
        )}
      {searchIsEnabled
        && <SearchBar page={ pageName } /> }
    </header>
  );
};

Header.propTypes = {
  pageName: PropTypes.string,
  searchEnabled: PropTypes.bool,
}.isRequired;

export default Header;
