import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeCards from '../../components/RecipeCards';
import CategoryButton from '../../components/CategoryButton';
import {
  searchDrinksByNameAPI,
  drinkCategoriesAPI,
  filterByDrinkCategoryAPI,
} from '../../services/fetchFromApi';

const FOR = 4;

const Drinks = () => {
  const [cardData, setCardData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategoryFilter, setCurrentCategoryFilter] = useState('noFilter');

  const transformDrinkArrToDefaultArr = (arr) => {
    const newArr = arr.map(({ idDrink, strDrinkThumb, strDrink }) => (
      { id: idDrink, strThumb: strDrinkThumb, str: strDrink }));
    return newArr;
  };

  const fetchDrinksAndStateIt = async () => {
    const results = await searchDrinksByNameAPI();
    const newResults = transformDrinkArrToDefaultArr(results);
    setCardData(newResults);
  };

  const fetchCaregoriesAndStateIt = async () => {
    const resultsCaregorie = await drinkCategoriesAPI();
    const newResultsCaregorie = resultsCaregorie.filter((_e, index) => index <= FOR)
      .map(({ strCategory }) => strCategory);
    setCategories(newResultsCaregorie);
  };

  const fetchFilteredByCaregoryAndStateIt = async (category) => {
    const result = await filterByDrinkCategoryAPI(category);
    const newResult = transformDrinkArrToDefaultArr(result);
    setCardData(newResult);
  };

  useEffect(() => {
    fetchDrinksAndStateIt();
    fetchCaregoriesAndStateIt();
  }, []);

  return (
    <div>
      <Header pageName="Drinks" searchEnabled />
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={
          () => { fetchDrinksAndStateIt(); setCurrentCategoryFilter('noFilter'); }
        }
      >
        All
      </button>
      {categories.map((category) => (
        <CategoryButton
          category={ category }
          key={ category }
          callBack={ fetchFilteredByCaregoryAndStateIt }
          callBack2={ fetchDrinksAndStateIt }
          currentCategoryFilter={ currentCategoryFilter }
          setCurrentCategoryFilter={ setCurrentCategoryFilter }
        />))}
      {cardData && <RecipeCards cardData={ cardData } currentPage="drinks" />}
      <Footer pageName="Drinks" />
    </div>
  );
};

export default Drinks;
