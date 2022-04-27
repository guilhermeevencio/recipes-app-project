import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ExploreFoods = () => {
  console.log('teste');
  return (
    <div>
      <Header pageName="Explore Foods" searchEnabled={ false } />
      <Footer pageName="Explore Foods" />
    </div>
  );
};

export default ExploreFoods;
