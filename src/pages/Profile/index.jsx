import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Profile = () => {
  const userEmail = localStorage.getItem('user');
  return (
    <div>
      <Header pageName="Profile" searchEnabled={ false } />
      <Footer pageName="Profile" />
      <div type="text" data-testid="profile-email">{userEmail}</div>
      <button type="button" data-testid="profile-done-btn">Done Recipes</button>
      <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
      <button type="button" data-testid="profile-logout-btn">Logout</button>
    </div>
  );
};

export default Profile;
