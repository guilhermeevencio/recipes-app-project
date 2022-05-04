import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const FinnishButton = (props) => {
  const { isDisabled } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push('/done-recipes');
  };

  return (
    <div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ isDisabled }
        onClick={ handleClick }
      >
        Finish Recipe
      </button>
    </div>
  );
};

FinnishButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
};

export default FinnishButton;
