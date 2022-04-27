import React, { useContext } from 'react';
import Header from '../../components/Header';
import AppContext from '../../context/MyContext';

const Foods = () => {
  const { teste } = useContext(AppContext);
  console.log(teste);
  return (
    <div>
      <Header pageName="Foods" searchEnabled />
    </div>
  );
};

export default Foods;
