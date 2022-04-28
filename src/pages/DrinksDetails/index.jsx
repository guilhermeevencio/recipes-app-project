import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../../components/RecipeDetails';
import fetchWithId from '../../services/fetchWithId';

const DrinksDetails = (props) => {
  const { match: { params: { drinkId } } } = props;
  console.log(drinkId);
  useEffect(() => {
    const receivedDataWithItemId = async () => {
      const receivedData = await fetchWithId(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
      console.log(receivedData);
      return receivedData;
    };
    receivedDataWithItemId();
  }, [drinkId]);
  return (
    <div>
      DrinksDetails
      <RecipeDetails pageName="Foods" />
    </div>
  );
};

DrinksDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      drinkId: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default DrinksDetails;
