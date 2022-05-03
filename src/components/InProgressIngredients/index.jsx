import React, { useContext } from 'react';
import AppContext from '../../context/MyContext';

const InProgressIngredients = () => {
  const { recipeDetails } = useContext(AppContext);
  return (
    <div>
      {recipeDetails
        && (
          recipeDetails.ingredients
            .filter((ingredient) => ingredient).map((ing, index) => (
              <label
                key={ index }
                data-testid={ `${index}-ingredient-step` }
                htmlFor={ `${index}-ingredient-step` }
              >
                <p>{ `${ing} - ${recipeDetails.measures[Number(index)]}` }</p>
                <input
                  type="checkbox"
                  id={ `${index}-ingredient-step` }
                />
              </label>
            ))
        )}
    </div>
  );
};

export default InProgressIngredients;
