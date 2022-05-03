import React from 'react';
import PropTypes from 'prop-types';
// import AppContext from '../../context/MyContext';
import useFoodRecipeDetails from '../../customHooks/useFoodRecipeDetails';
import RecipeHeading from '../../components/RecipeHeading';
import InProgressIngredients from '../../components/InProgressIngredients';
import InstructionsCard from '../../components/InstructionsCard';
import FinnishButton from '../../components/FinishRecipeButton';

const FoodInProgress = (props) => {
  const { match: { params: { foodId } } } = props;
  // const { recipeDetails } = useContext(AppContext);
  useFoodRecipeDetails(foodId);

  return (
    <div>
      <RecipeHeading />
      <InProgressIngredients />
      <InstructionsCard />
      <FinnishButton />
    </div>
  );
};

FoodInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      foodId: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default FoodInProgress;
