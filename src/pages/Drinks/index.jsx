import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeCards from '../../components/RecipeCards';
import CategoryButton from '../../components/CategoryButton';
import { searchDrinksByNameAPI, drinkCategoriesAPI } from '../../services/fetchFromApi';

const FOR = 4;

const Drinks = () => {
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchDrinks = async () => {
    const results = await searchDrinksByNameAPI();
    const newResults = results.map(({ idDrink, strDrinkThumb, strDrink }) => (
      { id: idDrink, strThumb: strDrinkThumb, str: strDrink }
    ));
    setCards(newResults);
  };

  const fetchCaregories = async () => {
    const resultsCaregorie = await drinkCategoriesAPI();
    const newResultsCaregorie = resultsCaregorie.filter((_e, index) => index <= FOR)
      .map(({ strCategory }) => strCategory);
    setCategories(newResultsCaregorie);
  };

  useEffect(() => {
    fetchDrinks();
    fetchCaregories();
  }, []);

  return (
    <div>
      <Header pageName="Drinks" searchEnabled />
      {categories.map((category) => (
        <CategoryButton category={ category } key={ category } />))}
      {cards && <RecipeCards cardData={ cards } />}
      <Footer pageName="Drinks" />
    </div>
  );
};

export default Drinks;
