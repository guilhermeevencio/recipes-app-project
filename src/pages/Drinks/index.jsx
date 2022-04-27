import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Drinks = () => {
  console.log('teste');
  return (
    <div>
      <Header pageName="Drinks" searchEnabled />
      <Footer pageName="Drinks" />
    </div>
  );
};

export default Drinks;
