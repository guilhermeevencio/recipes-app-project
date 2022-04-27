import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './MyContext';

const Provider = ({ children }) => {
  const [teste, setTeste] = useState('teste');
  const [pageName, setPageName] = useState('');
  const contextValue = {
    pageName,
    setPageName,
    teste,
    setTeste,
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
