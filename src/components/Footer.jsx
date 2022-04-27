import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => {
  const history = useHistory();

  return (
    <footer
      data-testid="footer"
      style={ {
        bottom: '0',
        position: 'fixed',
        left: '0',
        zIndex: '2',
      } }
    >
      <button
        type="button"
        onClick={ () => history.push('/drinks') }
      >
        <img
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
          alt="drinks button"
        />
      </button>
      <button
        type="button"
        onClick={ () => history.push('/explore') }
      >
        <img
          src={ exploreIcon }
          data-testid="explore-bottom-btn"
          alt="explore button"
        />
      </button>
      <button
        type="button"
        onClick={ () => history.push('/foods') }
      >
        <img
          src={ mealIcon }
          data-testid="food-bottom-btn"
          alt="foods button"
        />
      </button>
    </footer>
  );
};

export default Footer;
