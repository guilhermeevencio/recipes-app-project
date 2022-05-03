export default function handleWithObjectKeys(obj) {
  switch (obj.type) {
  case 'drink':
    return ({
      id: obj.idDrink,
      strThumb: obj.strDrinkThumb,
      str: obj.strDrink,
      category: obj.strCategory,
      ingredients: obj.ingredients,
      instructions: obj.strInstructions,
      videoStr: null,
      measures: obj.measure,
      recomendationUrl: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      alcoholic: obj.strAlcoholic,
      nationality: '',
      type: 'drink',
      page: 'drinks',
      pageName: 'Drinks',
      inProgressKey: 'cocktails',
    });
  case 'food':
    return ({
      id: obj.idMeal,
      strThumb: obj.strMealThumb,
      str: obj.strMeal,
      category: obj.strCategory,
      ingredients: obj.ingredients,
      instructions: obj.strInstructions,
      videoStr: obj.videoStr,
      measures: obj.measure,
      recomendationUrl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      alcoholic: '',
      nationality: obj.strArea,
      type: 'food',
      page: 'foods',
      pageName: 'Foods',
      inProgressKey: 'meals',
    });
  default:
    break;
  }
}
