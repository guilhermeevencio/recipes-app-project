import { fetchFromApi } from './fetchFromApi';

const fetchRecomendations = async (url, pageName) => {
  const recipes = await fetchFromApi(url);
  const numberOfRecomendations = 6;
  if (pageName === 'Foods') {
    const newRecipes = [...recipes.drinks];
    const sixRecomentations = newRecipes.splice(0, numberOfRecomendations);
    const drinksResult = sixRecomentations
      .map(({ idDrink, strDrinkThumb, strDrink }) => (
        { id: idDrink, strThumb: strDrinkThumb, str: strDrink, page: 'drinks' }
      ));
    return drinksResult;
  }
  if (pageName === 'Drinks') {
    const newRecipes = [...recipes.meals];
    const sixRecomentations = newRecipes.splice(0, numberOfRecomendations);
    const mealsResult = sixRecomentations
      .map(({ idMeal, strMealThumb, strMeal }) => (
        { id: idMeal, strThumb: strMealThumb, str: strMeal, page: 'foods' }
      ));
    return mealsResult;
  }
};

export default fetchRecomendations;
