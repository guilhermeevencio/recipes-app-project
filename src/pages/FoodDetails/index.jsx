import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../../components/RecipeDetails';
import fetchWithId from '../../services/fetchWithId';

const FoodDetails = (props) => {
  const { match: { params: { foodId } } } = props;
  useEffect(() => {
    const receivedDataWithItemId = async () => {
      const receivedData = await fetchWithId(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
      console.log(receivedData);
      return receivedData;
    };
    receivedDataWithItemId();
  }, [foodId]);
  return (
    <div>
      FoodDetails
      <RecipeDetails pageName="Foods" />
    </div>
  );
};

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      foodId: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default FoodDetails;
