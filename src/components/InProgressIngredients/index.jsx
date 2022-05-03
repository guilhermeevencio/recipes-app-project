import React, { useContext, useState } from 'react';
import AppContext from '../../context/MyContext';
import './styles.css';

const InProgressIngredients = () => {
  const { recipeDetails } = useContext(AppContext);
  const [isChecked, setIsChecked] = useState([]);

  const isIngredientChecked = (ingredient) => (
    isChecked.includes(ingredient)
      ? 'ingredient-checked' : 'ingredient-not-checked'
  );

  const handleCheck = ({ target }) => {
    let updatedList = [...isChecked];

    if (target.checked) {
      updatedList = [...isChecked, target.value];
      setIsChecked(updatedList);
    } else {
      const filteredUpdList = updatedList
        .filter((item) => item !== target.value);
      setIsChecked(filteredUpdList);
    }
  };

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
                <p
                  className={
                    isIngredientChecked(ing)
                  }
                >
                  { recipeDetails.measures[Number(index)]
                    ? `${ing} - ${recipeDetails.measures[Number(index)]}`
                    : `${ing}`}
                </p>
                <input
                  type="checkbox"
                  id={ `${index}-ingredient-step` }
                  onChange={ handleCheck }
                  value={ ing }
                />
              </label>
            ))
        )}
    </div>
  );
};

export default InProgressIngredients;
