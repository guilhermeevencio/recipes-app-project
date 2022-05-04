import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/MyContext';
import useFoodRecipeDetails from '../../customHooks/useFoodRecipeDetails';
import RecipeHeading from '../../components/RecipeHeading';
import InProgressIngredients from '../../components/InProgressIngredients';
import InstructionsCard from '../../components/InstructionsCard';
import FinnishButton from '../../components/FinishRecipeButton';
import useLocalStorage from '../../customHooks/useLocalStorage';

const FoodInProgress = (props) => {
  const { match: { params: { foodId } } } = props;
  const { recipeDetails,
    recipeStatusInfo,
    setRecipeStatusInfo } = useContext(AppContext);
  useFoodRecipeDetails(foodId);
  const [favoriteRecipesValue] = useLocalStorage('favoriteRecipes', []);
  const [doneRecipesValue] = useLocalStorage('doneRecipes', []);

  useEffect(() => {
    if (recipeDetails) {
      setRecipeStatusInfo({
        ...recipeStatusInfo,
        isFavorite: favoriteRecipesValue.some(({ id }) => id && id === recipeDetails.id),
        isFinished: doneRecipesValue.some(({ id }) => id && id === recipeDetails.id),
      });
    }
  }, [recipeDetails, doneRecipesValue, favoriteRecipesValue]);

  return (
    <div>
      {recipeDetails
        && (
          <div>
            <RecipeHeading />
            <InProgressIngredients />
            <InstructionsCard />
            <FinnishButton isDisabled={ recipeStatusInfo.isInProgress } />
          </div>)}
    </div>
  );
};

FoodInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      foodId: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default FoodInProgress;
