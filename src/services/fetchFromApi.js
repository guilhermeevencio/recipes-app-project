export const fetchFromApi = async (url) => {
  const response = await fetch(url);
  const data = response.json();
  return data;
};

// ------------------------------------------->
// FOODS
export const searchMealByNameAPI = async (nameSearch = '') => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${nameSearch}`,
  );
  const data = await response.json();
  return data.meals;
};

export const searchMealByFirstLetterAPI = async (letterSearch) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letterSearch}`,
  );
  const data = await response.json();
  return data.meals;
};

export const foodCategoriesAPI = async (categorie = 'list') => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?c=${categorie}`,
  );
  const data = await response.json();
  return data.meals;
};

export const filterByMealCategoryAPI = async (categorie = 'Seafood') => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`,
  );
  const data = await response.json();
  return data.meals;
};

export const randomFoodAPI = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php',
  );
  const data = await response.json();
  return data.meals[0];
};

export const listAllIngredientsFoodsAPI = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  );
  const data = await response.json();
  return data.meals;
};

export const filerByMainIngredientFoodsAPI = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  const data = await response.json();
  return data.meals;
};

// ------------------------------------------->
// DRINKS
export const searchDrinksByNameAPI = async (nameSearch = '') => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameSearch}`,
  );
  const data = await response.json();
  return data.drinks;
};

export const drinkCategoriesAPI = async (categorie = 'list') => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=${categorie}`,
  );
  const data = await response.json();
  return data.drinks;
};

export const filterByDrinkCategoryAPI = async (categorie = 'Cocktail_glass') => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorie}`,
  );
  const data = await response.json();
  return data.drinks;
};

export const randomDrinkAPI = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  );
  const data = await response.json();
  return data.drinks[0];
};

export const listAllIngredientsDrinksAPI = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
  );
  const data = await response.json();
  return data.drinks;
};

export const filerByMainIngredientDrinksAPI = async (ingredient) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  const data = await response.json();
  return data.drinks;
};
