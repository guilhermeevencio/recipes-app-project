import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../../components/RecipeDetails';
import fetchWithId from '../../services/fetchWithId';
import handleWithObjectKeys from '../../helpers/RecipeDetailsHelpers';
import AppContext from '../../context/MyContext';
import RecomendationRecipes from '../../components/RecomendedRecipes';
import StartRecipeButton from '../../components/StartRecipeButton';
import useLocalStorage from '../../customHooks/useLocalStorage';

const DrinksDetails = (props) => {
  const { match: { params: { drinkId } } } = props;
  const {
    recipeDetails,
    setRecipeDetails,
    recipeStatusInfo,
    setRecipeStatusInfo } = useContext(AppContext);

  const [doneRecipesValue] = useLocalStorage('doneRecipes', []);
  const [favoriteRecipesValue] = useLocalStorage('favoriteRecipes', []);
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
  }, [recipeDetails, doneRecipesValue, favoriteRecipesValue, inProgressRecipesValue]);

  useEffect(() => {
    const receivedDataWithItemId = async () => {
      const { drinks } = await fetchWithId(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
      const ingredientsObj = Object
        .fromEntries(Object.entries(drinks[0])
          .filter(([key]) => key.includes('Ingredient')));
      const ingredientsArr = Object.values(ingredientsObj);

      const measureObj = Object
        .fromEntries(Object.entries(drinks[0])
          .filter(([key]) => key.includes('Measure')));
      const measureArr = Object.values(measureObj);

      const recipeObj = {
        ...drinks[0],
        ingredients: ingredientsArr,
        measure: measureArr,
        type: 'drink',
      };

      const refactoredRecipeObj = handleWithObjectKeys(recipeObj);
      setRecipeDetails(refactoredRecipeObj);
    };
    receivedDataWithItemId();
  }, [drinkId, setRecipeDetails]);

  return (
    <div>
      DrinksDetails
      {recipeDetails
      && (
        <div>
          <RecipeDetails />
          <RecomendationRecipes />
          {!recipeStatusInfo.isFinished && <StartRecipeButton />}
        </div>
      )}
    </div>
  );
};

DrinksDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      drinkId: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default DrinksDetails;
