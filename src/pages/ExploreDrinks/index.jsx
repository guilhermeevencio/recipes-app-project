import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ExploreDrinks = () => {
  console.log('teste');
  return (
    <div>
      <Header pageName="Explore Drinks" searchEnabled={ false } />
      <Footer pageName="Explore Drinks" />
    </div>
  );
};

export default ExploreDrinks;
