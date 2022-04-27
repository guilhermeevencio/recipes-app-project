import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Explore = () => {
  console.log('hello');
  return (
    <div>
      <Header pageName="Explore" searchEnabled={ false } />
      <Footer pageName="Explore" />
    </div>
  );
};

export default Explore;
