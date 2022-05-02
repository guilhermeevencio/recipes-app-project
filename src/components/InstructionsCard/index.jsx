import React, { useContext } from 'react';
import AppContext from '../../context/MyContext';

const InstructionsCard = () => {
  const { recipeDetails } = useContext(AppContext);
  return (
    <div>
      <h3>Instructions</h3>
      <p data-testid="instructions">{ recipeDetails.instructions }</p>
    </div>
  );
};

export default InstructionsCard;
