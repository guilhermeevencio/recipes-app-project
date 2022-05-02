import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Profile = () => {
  const userEmail = localStorage.getItem('user');
  const history = useHistory();

  const clearLocalStorageAndRedirectToLogin = () => {
    if (localStorage !== null) {
      localStorage.clear();
    }
    return history.push('/');
  };

  return (
    <div>
      <Header pageName="Profile" searchEnabled={ false } />
      <Footer pageName="Profile" />
      <div type="text" data-testid="profile-email">{ userEmail }</div>
      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
      </Link>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ clearLocalStorageAndRedirectToLogin }
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
