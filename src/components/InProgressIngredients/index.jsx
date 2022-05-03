import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/MyContext';
import useLocalStorage from '../../customHooks/useLocalStorage';
import './styles.css';

const InProgressIngredients = () => {
  const { recipeDetails } = useContext(AppContext);
  const [isChecked, setIsChecked] = useState([]);
  const [
    inProgressRecipesValue,
    setIProgressRecipesValue,
  ] = useLocalStorage('inProgressRecipes', { meals: {}, cocktails: {} });

  useEffect(() => {
    if (recipeDetails
      && !!inProgressRecipesValue[recipeDetails.inProgressKey][recipeDetails.id]) {
      setIsChecked(inProgressRecipesValue[recipeDetails.inProgressKey][recipeDetails.id]);
    }
  }, [recipeDetails, inProgressRecipesValue]);

  const isIngredientCheckedClass = (ingredient) => (
    isChecked.includes(ingredient)
      ? 'ingredient-checked' : 'ingredient-not-checked'
  );

  // const isIngredientChecked = (ingredient) => {
  //   console.log(!!isChecked.includes(ingredient));
  //   return !!isChecked.includes(ingredient);
  // };

  const handleCheck = ({ target }) => {
    let updatedList = [...isChecked];
    if (target.checked) {
      updatedList = [...isChecked, target.value];
      setIsChecked(updatedList);
      setIProgressRecipesValue({
        ...inProgressRecipesValue,
        [recipeDetails.inProgressKey]: {
          [recipeDetails.id]: updatedList,
        },
      });
    } else {
      const filteredList = updatedList
        .filter((item) => item !== target.value);
      setIsChecked(filteredList);
      setIProgressRecipesValue({
        ...inProgressRecipesValue,
        [recipeDetails.inProgressKey]: {
          [recipeDetails.id]: filteredList,
        },
      });
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
                    isIngredientCheckedClass(ing)
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
                  defaultChecked={ isChecked.includes(ing) }
                />
              </label>
            ))
        )}
    </div>
  );
};

export default InProgressIngredients;
