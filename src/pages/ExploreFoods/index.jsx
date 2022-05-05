import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { randomFoodAPI } from '../../services/fetchFromApi';

const ExploreFoods = () => {
  const history = useHistory();

  const handleSurpriseMe = async () => {
    const { idMeal } = await randomFoodAPI();
    history.push(`/foods/${idMeal}`);
  };

  return (
    <div>
      <Header pageName="Explore Foods" searchEnabled={ false } />
      <Footer pageName="Explore Foods" />
      <Link to="/explore/foods/ingredients">
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
      </Link>
      <Link to="/explore/foods/nationalities">
        <button type="button" data-testid="explore-by-nationality">By Nationality</button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleSurpriseMe }
      >
        Surprise me!
      </button>
    </div>
  );
};

export default ExploreFoods;
