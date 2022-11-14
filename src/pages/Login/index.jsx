import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/MyContext';
import { InputsDiv, LoginButton, LoginContainerDiv } from './style';
import recipesAppLogo from '../../images/recipes-app-logo.png';

function Login() {
  const { setPageName } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    const emailValidation = () => {
      const six = 6;
      const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email);
      if (email === '' || password === '' || password.length <= six || !regex) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    };

    emailValidation();
  }, [email, password]);

  const handleChange = (event) => {
    switch (event.target.name) {
    case 'email':
      setEmail(event.target.value);
      break;
    case 'password':
      setPassword(event.target.value);
      break;
    default:
      break;
    }
  };

  const handleEnter = async () => {
    const userObj = { email };
    window.localStorage.setItem('mealsToken', '1');
    window.localStorage.setItem('cocktailsToken', '1');
    window.localStorage.setItem('user', JSON.stringify(userObj));
    window.localStorage.setItem('doneRecipes', JSON.stringify([]));
    window.localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    setPageName('Foods');
    history.push('./foods');
  };

  return (
    <LoginContainerDiv>
      <img src={ recipesAppLogo } alt="recipes-app" />
      <InputsDiv>
        <input
          data-testid="email-input"
          type="email"
          value={ email }
          name="email"
          onChange={ handleChange }
          placeholder="email@email.com..."
        />

        <input
          data-testid="password-input"
          type="password"
          value={ password }
          name="password"
          onChange={ handleChange }
          placeholder="Password..."
        />
      </InputsDiv>
      <LoginButton
        data-testid="login-submit-btn"
        type="button"
        disabled={ isDisabled }
        onClick={ handleEnter }
      >
        Enter
      </LoginButton>
    </LoginContainerDiv>
  );
}

export default Login;
