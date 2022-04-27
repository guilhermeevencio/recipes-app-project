import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ExploreFoodsByNationalities = () => {
  console.log('teste');
  return (
    <div>
      <Header pageName="Explore Nationalities" searchEnabled />
      <Footer pageName="Explore Nationalities" />
    </div>
  );
};

export default ExploreFoodsByNationalities;
