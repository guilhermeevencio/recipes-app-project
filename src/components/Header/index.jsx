import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MagnifyingGlass, User } from 'phosphor-react';
import SearchBar from '../SearchBar';
import { ButtonsDiv, HeaderContainer } from './style';

const Header = (props) => {
  const { pageName, searchEnabled } = props;
  const [searchIsEnabled, setSearchIsEnabled] = useState(false);
  const handleSearchBar = () => {
    setSearchIsEnabled(!searchIsEnabled);
  };

  const history = useHistory();
  return (
    <>
      <HeaderContainer>
        <h1
          data-testid="page-title"
        >
          { pageName }
        </h1>
        <ButtonsDiv>
          {searchEnabled
        && (
          <button
            type="button"
            onClick={ handleSearchBar }
          >
            <MagnifyingGlass size={ 32 } />
          </button>
        )}
          <button
            type="button"
            onClick={ () => history.push('/profile') }
          >
            <User size={ 32 } />
          </button>
        </ButtonsDiv>
      </HeaderContainer>
      {searchIsEnabled
        && <SearchBar page={ pageName } /> }
    </>
  );
};

Header.propTypes = {
  pageName: PropTypes.string,
  searchEnabled: PropTypes.bool,
}.isRequired;

export default Header;
