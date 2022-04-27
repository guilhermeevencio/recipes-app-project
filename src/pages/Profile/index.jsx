import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Profile = () => {
  console.log('teste.');
  return (
    <div>
      <Header pageName="Profile" searchEnabled={ false } />
      <Footer pageName="Profile" />
    </div>
  );
};

export default Profile;
