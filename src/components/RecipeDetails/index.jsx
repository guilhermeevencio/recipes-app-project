import React, { useContext } from 'react';
import './styles.css';
import InstructionsCard from '../InstructionsCard';
import RecipeHeading from '../RecipeHeading';
import AppContext from '../../context/MyContext';

const RecipeDetails = () => {
  const { recipeDetails } = useContext(AppContext);
  return (
    <div>
      <RecipeHeading />
      <h3>Ingredients</h3>
      {recipeDetails.ingredients.filter((ingredient) => ingredient).map((ing, index) => (
        <li
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          { `${ing} - ${recipeDetails.measures[Number(index)]}` }
        </li>
      ))}
      <InstructionsCard />
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
