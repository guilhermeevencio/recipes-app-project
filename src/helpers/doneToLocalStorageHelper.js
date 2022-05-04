export default function doneToLocalStorageHelper(recipeObj) {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const fullDate = `${day}/${month}/${year}`;

  return ({
    id: recipeObj.id,
    type: recipeObj.type,
    nationality: recipeObj.nationality,
    category: recipeObj.category,
    alcoholicOrNot: recipeObj.alcoholic,
    name: recipeObj.str,
    image: recipeObj.strThumb,
    doneDate: fullDate,
    tags: recipeObj.tags,
  });
}
