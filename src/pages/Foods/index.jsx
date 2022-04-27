import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Foods = () => {
  console.log('hello world');
  return (
    <div>
      <Header pageName="Foods" searchEnabled />
      <Footer pageName="Foods" />
    </div>
  );
};

export default Foods;
