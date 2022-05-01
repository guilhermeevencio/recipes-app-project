import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/MyContext';
import './styles.css';

const StartRecipeButton = () => {
  const { recipeDetails, recipeStatusInfo } = useContext(AppContext);
  return (
    <Link
      to={ `/${recipeDetails.page}/${recipeDetails.id}/in-progress` }
      type="button"
      data-testid="start-recipe-btn"
    >
      {recipeStatusInfo.isInProgress ? 'Continue Recipe' : 'Start Recipe'}
    </Link>
  );
};

export default StartRecipeButton;
