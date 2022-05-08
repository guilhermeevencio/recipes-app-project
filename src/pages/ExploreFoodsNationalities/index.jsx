import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fetchFromApi } from '../../services/fetchFromApi';

const ExploreFoodsByNationalities = () => {
  useEffect(() => {
    const receiveNationalities = async () => {
      const data = fetchFromApi('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      console.log(data);
    };
    receiveNationalities();
  }, []);
  return (
    <div>
      <Header pageName="Explore Nationalities" searchEnabled />
      <Footer pageName="Explore Nationalities" />
    </div>
  );
};

export default ExploreFoodsByNationalities;
