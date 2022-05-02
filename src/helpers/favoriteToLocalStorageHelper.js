export default function favoriteToLocalStorageHelper(recipeDetails) {
  return (
    {
      id: recipeDetails.id,
      type: recipeDetails.type,
      nationality: recipeDetails.nationality,
      category: recipeDetails.category,
      alcoholicOrNot: recipeDetails.alcoholic,
      name: recipeDetails.str,
      image: recipeDetails.strThumb,
    }
  );
}
