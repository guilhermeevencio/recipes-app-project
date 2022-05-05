// Remove do localStorage um item usando o index
// É importante lembrar que o seu estado deve estar sincronizado com o array do localStorage para dar match nas posições, caso contrário estará removendo um item diferente do que você quer
export const removeFavoriteItemFromLocalStorageByIndex = (index) => {
  const result = localStorage.getItem('favoriteRecipes');
  const favoritesFromLocalStorage = JSON.parse(result);
  favoritesFromLocalStorage.splice(index, 1);
  const newFavoritesFromLocalStorage = JSON.stringify(favoritesFromLocalStorage);
  localStorage.setItem('favoriteRecipes', newFavoritesFromLocalStorage);
  return favoritesFromLocalStorage;
};

export const getArrayOfFavoritesFromLocalStorage = () => {
  const result = localStorage.getItem('favoriteRecipes');
  return JSON.parse(result);
};
