import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { listAllIngredientsDrinksAPI } from '../../services/fetchFromApi';

const TWELVE = 12;

const ExploreDrinksIngredients = () => {
  const [allIngredients, setAllIngredients] = useState([]);

  const fetchAllIngredients = async () => {
    const result = await listAllIngredientsDrinksAPI();
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
      {allIngredients.map(({ strIngredient1 }, index) => (
        <Link
          key={ strIngredient1 }
          data-testid={ `${index}-ingredient-card` }
          to={ `/drinks?ingredient=${strIngredient1}` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
            alt={ strIngredient1 }
          />
          <div data-testid={ `${index}-card-name` }>{strIngredient1}</div>
        </Link>
      ))}
      <Footer pageName="Explore Ingredients" />
    </div>
  );
};

export default ExploreDrinksIngredients;
