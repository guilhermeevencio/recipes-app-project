import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../../components/RecipeDetails';
import fetchWithId from '../../services/fetchWithId';

const DrinksDetails = (props) => {
  const { match: { params: { drinkId } } } = props;
  const [recipeItem, setRecipeItem] = useState();
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
        id: drinks[0].idDrink,
        strThumb: drinks[0].strDrinkThumb,
        str: drinks[0].strDrink,
        category: drinks[0].strAlcoholic,
        ingredients: ingredientsArr,
        instructions: drinks[0].strInstructions,
        videoStr: drinks[0].strYoutube,
        recomendations: drinks[0].strDrinkAlternate,
        measures: measureArr,
        page: 'deinks' };
      setRecipeItem(recipeObj);
      return recipeObj;
    };
    receivedDataWithItemId();
  }, [drinkId]);
  return (
    <div>
      DrinksDetails
      {recipeItem && <RecipeDetails pageName="Drinks" recipe={ recipeItem } />}
    </div>
  );
};

DrinksDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      drinkId: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default DrinksDetails;
