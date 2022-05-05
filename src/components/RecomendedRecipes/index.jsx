import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/MyContext';
import fetchRecomendations from '../../services/fetchRecommendations';
import './styles.css';

const RecomendationRecipes = () => {
  const { recipeDetails: { recomendationUrl, pageName } } = useContext(AppContext);
  const [recomendationsResuls, setRecomendationsResults] = useState([]);

  useEffect(() => {
    const receiveDataFromApi = async () => {
      const results = await fetchRecomendations(recomendationUrl, pageName);
      setRecomendationsResults(results);
    };
    receiveDataFromApi();
  }, [pageName, recomendationUrl]);

  return (
    <div className="recomendationrecipes-container">
      <div className="recomendationrecipes-images-group">
        {recomendationsResuls
          && recomendationsResuls.map(({ id, strThumb, str, page }, index) => (
            <Link
              to={ `/${page}/${id}` }
              key={ id }
              id={ id }
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
    </div>
  );
};

export default RecomendationRecipes;
