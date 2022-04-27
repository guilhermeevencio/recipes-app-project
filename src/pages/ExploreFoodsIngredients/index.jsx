import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ExploreFoodsIngredients = () => {
  console.log('teste');
  return (
    <div>
      <Header pageName="Explore Ingredients" searchEnabled={ false } />
      <Footer pageName="Explore Ingredients" />
    </div>
  );
};

export default ExploreFoodsIngredients;
