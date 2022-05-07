import React from 'react';
import DoneRecipeCard from '../../components/DoneRecipeCard';
import Header from '../../components/Header';
import useLocalStorage from '../../customHooks/useLocalStorage';

const DoneRecipes = () => {
  const [doneRecipes] = useLocalStorage('doneRecipes', []);
  console.log(doneRecipes);
  return (
    <div>
      <Header pageName="Done Recipes" searchEnabled={ false } />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drink
        </button>
      </div>
      {doneRecipes.map((recipe, index) => (
        <DoneRecipeCard key={ recipe.id } recipe={ recipe } index={ index } />
      ))}
    </div>
  );
};

export default DoneRecipes;
