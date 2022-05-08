import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fetchFromApi } from '../../services/fetchFromApi';
import RecipeCards from '../../components/RecipeCards';

const ExploreFoodsByNationalities = () => {
  const [arreaArr, setAreaArr] = useState();
  const [recipesData, setRecipesData] = useState();
  const [rawData, setRawData] = useState();

  useEffect(() => {
    const receiveNationalities = async () => {
      const { meals } = await fetchFromApi('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      setAreaArr(meals.map(({ strArea }) => strArea));
    };
    receiveNationalities();
  }, []);
  useEffect(() => {
    const receiveData = async () => {
      const { meals } = await fetchFromApi('https://www.themealdb.com/api/json/v1/1/search.php?s=');

      setRecipesData(meals.map(({ idMeal, strMealThumb, strMeal, strArea }) => ({
        id: idMeal, strThumb: strMealThumb, str: strMeal, page: 'foods', area: strArea,
      })));
      setRawData(meals.map(({ idMeal, strMealThumb, strMeal, strArea }) => ({
        id: idMeal, strThumb: strMealThumb, str: strMeal, page: 'foods', area: strArea,
      })));
    };
    receiveData();
  }, []);

  const handleChange = async ({ target }) => {
    if (target.value === 'All') {
      setRecipesData(rawData);
    } else {
      const filteredData = await fetchFromApi(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${target.value}`,
      );
      setRecipesData(filteredData.meals
        .map(({ idMeal, strMealThumb, strMeal, strArea }) => ({
          id: idMeal, strThumb: strMealThumb, str: strMeal, page: 'foods', area: strArea,
        })));
    }
  };

  return (
    <div>
      <Header pageName="Explore Nationalities" searchEnabled />
      {arreaArr
        && (
          <select
            data-testid="explore-by-nationality-dropdown"
            onChange={ handleChange }
          >
            <option
              defaultChecked
              value="All"
              data-testid="All-option"
            >
              All
            </option>
            {arreaArr.map((area, index) => (
              <option
                value={ area }
                key={ index }
                data-testid={ `${area}-option` }
              >
                {area}
              </option>
            ))}
          </select>
        )}
      {recipesData && <RecipeCards cardData={ recipesData } />}
      <Footer pageName="Explore Nationalities" />
    </div>
  );
};

export default ExploreFoodsByNationalities;
