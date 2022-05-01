import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/MyContext';
import fetchRecomendations from '../../services/fetchRecommendations';

const RecomendationRecipes = () => {
  const { recipeDetails } = useContext(AppContext);
  const [recomendationsResuls, setRecomendationsResults] = useState([]);
  useEffect(() => {
    if (recipeDetails) {
      const receiveDataFromApi = async () => {
        const results = await fetchRecomendations(
          recipeDetails.recomendationUrl, recipeDetails.pageName,
        );
        setRecomendationsResults(results);
      };
      receiveDataFromApi();
    }
  }, [recipeDetails]);
  return (
    <div className="carousel-container">
      {recomendationsResuls
        && recomendationsResuls.map(({ id, strThumb, str, page }, index) => (
          <Link
            to={ `/${page}/${id}` }
            key={ id }
            id={ id }
            className="recomendation-card"
            data-testid={ `${index}-recomendation-card` }
          >
            <div
              data-testid={ `${index}-recomendation-title` }
            >
              {str}
            </div>
            <img
              width={ 70 }
              src={ strThumb }
              alt={ str }
              data-testid={ `${index}-card-img` }
            />
          </Link>
        ))}
    </div>
  );
};

export default RecomendationRecipes;
