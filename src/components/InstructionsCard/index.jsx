import React, { useContext } from 'react';
import AppContext from '../../context/MyContext';

const InstructionsCard = () => {
  const { recipeDetails } = useContext(AppContext);
  return (
    <div>
      {recipeDetails
        && (
          <section>
            <h3>Instructions</h3>
            <p data-testid="instructions">{recipeDetails.instructions}</p>
          </section>
        )}

    </div>
  );
};

export default InstructionsCard;
