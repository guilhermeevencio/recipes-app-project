import React, { useContext } from 'react';
import Header from '../../components/Header';
import AppContext from '../../context/MyContext';
import Footer from '../../components/Footer';

const Foods = () => {
  const { teste } = useContext(AppContext);
  console.log(teste);
  return (
    <div>
      <Header pageName="Foods" searchEnabled />
      <Footer pageName="Foods" />
    </div>
  );
};

export default Foods;
