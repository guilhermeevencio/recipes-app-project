import { useContext, useEffect } from 'react';
import fetchWithId from '../services/fetchWithId';
import handleWithObjectKeys from '../helpers/RecipeDetailsHelpers';
import AppContext from '../context/MyContext';

const useDrinkRecipeDetails = () => {
  const { setRecipeDetails } = useContext(AppContext);

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
};

export default useDrinkRecipeDetails;
