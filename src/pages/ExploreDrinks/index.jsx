import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ExploreDrinks = () => {
  console.log('teste');
  return (
    <div>
      <Header pageName="Explore Drinks" searchEnabled={ false } />
      <Footer pageName="Explore Drinks" />
      <Link to="/explore/drinks/ingredients">
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
      </Link>
      <Link to="/">
        <button type="button" data-testid="explore-surprise">Surprise me!</button>
      </Link>
    </div>
  );
};

export default ExploreDrinks;
