import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import doneToLocalStorageHelper from '../../helpers/doneToLocalStorageHelper';
import useLocalStorage from '../../customHooks/useLocalStorage';
import AppContext from '../../context/MyContext';

const FinnishButton = (props) => {
  const { isDisabled } = props;
  const { recipeDetails, recipeStatusInfo } = useContext(AppContext);
  const history = useHistory();
  const [doneRecipesValue, setDoneRecipesValue] = useLocalStorage('doneRecipes', []);

  const handleClick = () => {
    const doneData = doneToLocalStorageHelper(recipeDetails);
    if (!recipeStatusInfo.isFinished) {
      setDoneRecipesValue([
        ...doneRecipesValue,
        doneData,
      ]);
      setTimeout(() => {
        history.push('/done-recipes');
      }, 100);
    } else {
      history.push('/done-recipes');
    }
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
