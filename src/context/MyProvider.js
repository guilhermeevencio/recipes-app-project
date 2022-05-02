import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './MyContext';

const Provider = ({ children }) => {
  const [teste, setTeste] = useState('teste');
  const [pageName, setPageName] = useState('Food');
  const [dataFromApiSearch, setDataFromApiSearch] = useState({});
  const [cardDataFromSearchBar, setCardDataFromSearchBar] = useState([]);

  const contextValue = {
    pageName,
    setPageName,
    dataFromApiSearch,
    setDataFromApiSearch,
    teste,
    setTeste,
    cardDataFromSearchBar,
    setCardDataFromSearchBar,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
