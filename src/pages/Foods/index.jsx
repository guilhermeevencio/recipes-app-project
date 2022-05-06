import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeCards from '../../components/RecipeCards';
import CategoryButton from '../../components/CategoryButton';
import AppContext from '../../context/MyContext';

import {
  searchMealByNameAPI,
  foodCategoriesAPI,
  filterByMealCategoryAPI,
  filerByMainIngredientFoodsAPI,
} from '../../services/fetchFromApi';

const FOR = 4;

const Foods = () => {
  const [cardData, setCardData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategoryFilter, setCurrentCategoryFilter] = useState('noFilter');

  const { cardDataFromSearchBar } = useContext(AppContext);

  const location = useLocation();

  const transformMealArrToDefaultArr = (arr) => {
    const newArr = arr.map(({ idMeal, strMealThumb, strMeal }) => (
      { id: idMeal, strThumb: strMealThumb, str: strMeal, page: 'foods' }));
    return newArr;
  };

  const verifyIfLocationHaveIngredient = async () => {
    const index = location.search.indexOf('=');
    const string = location.search.substring(index + 1);
    const result = await filerByMainIngredientFoodsAPI(string);
    return result;
  };

  const fetchMealsAndStateIt = async () => {
    const result = location.search ? await verifyIfLocationHaveIngredient()
      : await searchMealByNameAPI();
    const newResults = transformMealArrToDefaultArr(result);
    setCardData(newResults);
  };

  const fetchCaregoriesAndStateIt = async () => {
    const result = await foodCategoriesAPI();
    const newResult = result.filter((_e, index) => index <= FOR)
      .map(({ strCategory }) => strCategory);
    setCategories(newResult);
  };

  const fetchFilteredByCaregoryAndStateIt = async (category) => {
    const result = await filterByMealCategoryAPI(category);
    const newResult = transformMealArrToDefaultArr(result);
    setCardData(newResult);
  };

  useEffect(() => {
    fetchMealsAndStateIt();
    fetchCaregoriesAndStateIt();
  }, []);

  useEffect(() => {
    setCardData(cardDataFromSearchBar);
  }, [cardDataFromSearchBar]);

  return (
    <div>
      <Header pageName="Foods" searchEnabled />
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={
          () => { fetchMealsAndStateIt(); setCurrentCategoryFilter('noFilter'); }
        }
      >
        All
      </button>
      {categories.map((category) => (
        <CategoryButton
          category={ category }
          key={ category }
          callBack={ fetchFilteredByCaregoryAndStateIt }
          callBack2={ fetchMealsAndStateIt }
          currentCategoryFilter={ currentCategoryFilter }
          setCurrentCategoryFilter={ setCurrentCategoryFilter }
        />))}
      {cardData && <RecipeCards cardData={ cardData } />}
      <Footer pageName="Foods" />
    </div>
  );
};

export default Foods;
