import React, { useEffect, useState } from 'react';
import DoneRecipeCard from '../../components/DoneRecipeCard';
import Header from '../../components/Header';
import useLocalStorage from '../../customHooks/useLocalStorage';

const DoneRecipes = () => {
  const [doneRecipes] = useLocalStorage('doneRecipes', []);
  const [recipeType, setRecipeType] = useState('all');
  const [recipes, setRecipes] = useState(doneRecipes);

  useEffect(() => {
    switch (recipeType) {
    case 'food':
      setRecipes(doneRecipes.filter(({ type }) => type === 'food'));
      break;
    case 'drink':
      setRecipes(doneRecipes.filter(({ type }) => type === 'drink'));
      break;
    default:
      setRecipes(doneRecipes);
      break;
    }
  }, [doneRecipes, recipeType]);
  return (
    <div>
      <Header pageName="Done Recipes" searchEnabled={ false } />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setRecipeType('all') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setRecipeType('food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setRecipeType('drink') }
        >
          Drink
        </button>
      </div>
      {recipes.map((recipe, index) => (
        <DoneRecipeCard key={ recipe.id } recipe={ recipe } index={ index } />
      ))}
    </div>
  );
};

export default DoneRecipes;
