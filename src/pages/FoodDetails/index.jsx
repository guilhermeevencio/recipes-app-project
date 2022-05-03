import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../../components/RecipeDetails';
import RecomendationRecipes from '../../components/RecomendedRecipes';
import fetchWithId from '../../services/fetchWithId';
import handleWithObjectKeys from '../../helpers/RecipeDetailsHelpers';
import AppContext from '../../context/MyContext';
import StartRecipeButton from '../../components/StartRecipeButton';
import useLocalStorage from '../../customHooks/useLocalStorage';

const FoodDetails = (props) => {
  const { match: { params: { foodId } } } = props;
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
      const { meals } = await fetchWithId(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);

      // codigo utilizado para dividir os arrays => https://masteringjs.io/tutorials/fundamentals/filter-key

      const ingredientsObj = Object
        .fromEntries(Object.entries(meals[0])
          .filter(([key]) => key.includes('Ingredient')));
      const ingredientsArr = Object.values(ingredientsObj);

      const measureObj = Object
        .fromEntries(Object.entries(meals[0])
          .filter(([key]) => key.includes('Measure')));
      const measureArr = Object.values(measureObj);

      const newLink = meals[0].strYoutube.replace('https://www.youtube.com/watch?v=',
        'http://www.youtube.com/embed/');

      const recipeObj = {
        ...meals[0],
        ingredients: ingredientsArr,
        measure: measureArr,
        type: 'food',
        videoStr: newLink,

      };
      const refactoredRecipeObj = handleWithObjectKeys(recipeObj);
      setRecipeDetails(refactoredRecipeObj);
    };
    receivedDataWithItemId();
  }, [foodId, setRecipeDetails]);

  return (
    <div>
      <h3>FoodDetails</h3>
      {recipeDetails && (
        <div>
          <RecipeDetails />
          <iframe
            width="420"
            height="315"
            title="Recipe Video"
            src={ recipeDetails.videoStr }
            data-testid="video"
          />
          <RecomendationRecipes />
          {!recipeStatusInfo.isFinished && <StartRecipeButton />}
        </div>)}
    </div>
  );
};

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      foodId: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default FoodDetails;
