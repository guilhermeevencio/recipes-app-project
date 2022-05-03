import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/MyContext';
import useDrinkRecipeDetails from '../../customHooks/useDrinkRecipeDetails';
import RecipeHeading from '../../components/RecipeHeading';
import InProgressIngredients from '../../components/InProgressIngredients';
import InstructionsCard from '../../components/InstructionsCard';
import FinnishButton from '../../components/FinishRecipeButton';

const DrinkInProgress = (props) => {
  const { match: { params: { drinkId } } } = props;
  const { recipeDetails } = useContext(AppContext);
  useDrinkRecipeDetails(drinkId);

  return (
    <div>
      {recipeDetails
        && (
          <div>
            <RecipeHeading />
            <InProgressIngredients />
            <InstructionsCard />
            <FinnishButton />
          </div>)}
    </div>
  );
};

DrinkInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      drinkId: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default DrinkInProgress;
