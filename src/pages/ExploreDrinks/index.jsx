import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { randomDrinkAPI } from '../../services/fetchFromApi';

const ExploreDrinks = () => {
  const history = useHistory();

  const handleSurpriseMe = async () => {
    const { idDrink } = await randomDrinkAPI();
    history.push(`/drinks/${idDrink}`);
  };

  return (
    <div>
      <Header pageName="Explore Drinks" searchEnabled={ false } />
      <Footer pageName="Explore Drinks" />
      <Link to="/explore/drinks/ingredients">
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
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

export default ExploreDrinks;
