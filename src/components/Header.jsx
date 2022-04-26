import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = () => {
  console.log('teste');
  const history = useHistory();
  return (
    <div>
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
      >
        <img
          src={ searchIcon }
          alt="search button"
        />
      </button>
    </div>
  );
};

export default Header;
