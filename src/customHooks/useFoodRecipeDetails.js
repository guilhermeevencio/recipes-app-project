import { useContext, useEffect } from 'react';
import fetchWithId from '../services/fetchWithId';
import handleWithObjectKeys from '../helpers/RecipeDetailsHelpers';
import AppContext from '../context/MyContext';

const useFoodRecipeDetails = (foodId) => {
  const { setRecipeDetails } = useContext(AppContext);

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
  }, [setRecipeDetails]);
};

export default useFoodRecipeDetails;
