import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../../components/RecipeDetails';
import fetchWithId from '../../services/fetchWithId';
// import AppContext from '../../context/MyContext';

const FoodDetails = (props) => {
  const { match: { params: { foodId } } } = props;

  const [recipeItem, setRecipeItem] = useState();

  useEffect(() => {
    const receivedDataWithItemId = async () => {
      const { meals } = await fetchWithId(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
      // codigo utilizado para dividor os arrays => https://masteringjs.io/tutorials/fundamentals/filter-key
      const ingredientsObj = Object
        .fromEntries(Object.entries(meals[0])
          .filter(([key]) => key.includes('Ingredient')));
      const ingredientsArr = Object.values(ingredientsObj);

      const measureObj = Object
        .fromEntries(Object.entries(meals[0])
          .filter(([key]) => key.includes('Measure')));
      const measureArr = Object.values(measureObj);
      const recipeObj = {
        id: meals[0].idMeal,
        strThumb: meals[0].strMealThumb,
        str: meals[0].strMeal,
        category: meals[0].strCategory,
        ingredients: ingredientsArr,
        instructions: meals[0].strInstructions,
        videoStr: meals[0].strYoutube,
        recomendations: meals[0].strDrinkAlternate,
        measures: measureArr,
        page: 'foods' };
      setRecipeItem(recipeObj);
      return recipeObj;
    };
    receivedDataWithItemId();
  }, [foodId]);
  return (
    <div>
      <h3>FoodDetails</h3>
      {recipeItem && <RecipeDetails pageName="Foods" recipe={ recipeItem } />}
    </div>
  );
};

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      foodId: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default FoodDetails;
