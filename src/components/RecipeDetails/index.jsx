import React from 'react';
import './styles.css';
import InstructionsCard from '../InstructionsCard';
import RecipeHeading from '../RecipeHeading';
import RecomendationRecipes from '../RecomendedRecipes';

const RecipeDetails = () => {
  // const { pageName, recipe } = props;
  console.log('teste');
  return (
    <div>
      <RecipeHeading />
      <h3>Ingredients</h3>
      <ul>
        <li data-testid="0-ingredient-name-and-measure">Ingredient 1</li>
      </ul>
      <InstructionsCard />
      <RecomendationRecipes />
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Start Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;
