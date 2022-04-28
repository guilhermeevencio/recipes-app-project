import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeCards from '../../components/RecipeCards';
import CategoryButton from '../../components/CategoryButton';
import { searchMealByNameAPI, foodCategoriesAPI } from '../../services/fetchFromApi';

const FOR = 4;

const Foods = () => {
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchMeals = async () => {
    const resultsMeal = await searchMealByNameAPI();
    const newResults = resultsMeal.map(({ idMeal, strMealThumb, strMeal }) => (
      { id: idMeal, strThumb: strMealThumb, str: strMeal }
    ));
    setCards(newResults);
  };

  const fetchCaregories = async () => {
    const resultsCaregorie = await foodCategoriesAPI();
    const newResultsCaregorie = resultsCaregorie.filter((_e, index) => index <= FOR)
      .map(({ strCategory }) => strCategory);
    setCategories(newResultsCaregorie);
  };

  useEffect(() => {
    fetchMeals();
    fetchCaregories();
  }, []);

  return (
    <div>
      <Header pageName="Foods" searchEnabled />
      {categories.map((category) => (
        <CategoryButton category={ category } key={ category } />))}
      {cards && <RecipeCards cardData={ cards } />}
      <Footer pageName="Foods" />
    </div>
  );
};

export default Foods;
