import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/MyContext';
import useDrinkRecipeDetails from '../../customHooks/useDrinkRecipeDetails';
import RecipeHeading from '../../components/RecipeHeading';
import InProgressIngredients from '../../components/InProgressIngredients';
import InstructionsCard from '../../components/InstructionsCard';
import FinnishButton from '../../components/FinishRecipeButton';
import useLocalStorage from '../../customHooks/useLocalStorage';

const DrinkInProgress = (props) => {
  const { match: { params: { drinkId } } } = props;
  const { recipeDetails,
    recipeStatusInfo,
    setRecipeStatusInfo } = useContext(AppContext);
  useDrinkRecipeDetails(drinkId);
  const [favoriteRecipesValue] = useLocalStorage('favoriteRecipes', []);
  const [doneRecipesValue] = useLocalStorage('doneRecipes', []);
  const [inProgressRecipesValue] = useLocalStorage(
    'inProgressRecipes', { meals: {}, cocktails: {} },
  );

  useEffect(() => {
    if (recipeDetails) {
      const inProgressId = Object.values(inProgressRecipesValue)
        .reduce((acc, obj) => [...acc, ...Object.keys(obj)], []);

      setRecipeStatusInfo({
        ...recipeStatusInfo,
        isFavorite: favoriteRecipesValue.some(({ id }) => id && id === recipeDetails.id),
        isFinished: doneRecipesValue.some(({ id }) => id && id === recipeDetails.id),
        isInProgress: inProgressId.some((id) => id === recipeDetails.id),
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
            {(!recipeStatusInfo.isInProgress)
              && <FinnishButton />}
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
