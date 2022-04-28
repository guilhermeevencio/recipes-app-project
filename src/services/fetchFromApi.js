export const fetchFromApi = async (url) => {
  const response = await fetch(url);
  const data = response.json();
  return data;
};

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
