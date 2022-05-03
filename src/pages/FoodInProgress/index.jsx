import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/MyContext';
import useFoodRecipeDetails from '../../customHooks/useFoodRecipeDetails';

const FoodInProgress = (props) => {
  const { match: { params: { foodId } } } = props;
  const { recipeDetails } = useContext(AppContext);
  useFoodRecipeDetails(foodId);

  return (
    <div>FoodInProgress</div>
  );
};

FoodInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      foodId: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default FoodInProgress;
