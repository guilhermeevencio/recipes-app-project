import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Provider from './context/MyProvider';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <ThemeProvider theme={ defaultTheme }>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
