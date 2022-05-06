import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { listAllIngredientsFoodsAPI } from '../../services/fetchFromApi';

const TWELVE = 12;

const ExploreFoodsIngredients = () => {
  const [allIngredients, setAllIngredients] = useState([]);

  const fetchAllIngredients = async () => {
    const result = await listAllIngredientsFoodsAPI();
    const resultCopy = [...result];
    const newResult = resultCopy.splice(0, TWELVE);
    setAllIngredients(newResult);
  };

  useEffect(() => {
    fetchAllIngredients();
  }, []);

  return (
    <div>
      <Header pageName="Explore Ingredients" searchEnabled={ false } />
      {allIngredients.map(({ idIngredient, strIngredient }, index) => (
        <Link
          key={ idIngredient }
          data-testid={ `${index}-ingredient-card` }
          to={ `/foods?ingredient=${strIngredient}` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
            alt={ strIngredient }
          />
          <div data-testid={ `${index}-card-name` }>{strIngredient}</div>
        </Link>
      ))}
      <Footer pageName="Explore Ingredients" />
    </div>
  );
};

export default ExploreFoodsIngredients;
