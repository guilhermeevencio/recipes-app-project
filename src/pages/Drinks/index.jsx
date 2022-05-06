import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeCards from '../../components/RecipeCards';
import CategoryButton from '../../components/CategoryButton';
import AppContext from '../../context/MyContext';
import {
  drinkCategoriesAPI,
  filterByDrinkCategoryAPI,
  searchDrinksByNameAPI,
  filerByMainIngredientDrinksAPI,
} from '../../services/fetchFromApi';

const FOR = 4;

const Drinks = () => {
  const [cardData, setCardData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategoryFilter, setCurrentCategoryFilter] = useState('noFilter');

  const { cardDataFromSearchBar } = useContext(AppContext);

  const location = useLocation();

  const transformDrinkArrToDefaultArr = (arr) => {
    const newArr = arr.map(({ idDrink, strDrinkThumb, strDrink }) => (
      { id: idDrink, strThumb: strDrinkThumb, str: strDrink, page: 'drinks' }));
    return newArr;
  };

  const verifyIfLocationHaveIngredient = async () => {
    const index = location.search.indexOf('=');
    const string = location.search.substring(index + 1);
    const result = await filerByMainIngredientDrinksAPI(string);
    console.log('oioioi');
    return result;
  };

  const fetchDrinksAndStateIt = async () => {
    const result = location.search ? await verifyIfLocationHaveIngredient()
      : await searchDrinksByNameAPI();
    const newResults = transformDrinkArrToDefaultArr(result);
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

  useEffect(() => {
    setCardData(cardDataFromSearchBar);
  }, [cardDataFromSearchBar]);

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
      {cardData && <RecipeCards cardData={ cardData } />}
      <Footer pageName="Drinks" />
    </div>
  );
};

export default Drinks;
