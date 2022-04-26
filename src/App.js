import React from 'react';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Foods from './pages/Foods';
import Login from './pages/Login/Index';
import Profile from './pages/Profile/index';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/profie" component={ Profile } />
    </Switch>
  );
}

export default App;
