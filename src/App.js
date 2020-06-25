import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './Components/HomePage'
import UserDashboard from './Components/UserDashboard'
import Login from './Components/Connexion/Login'
import UserRegisterForm from './Components/UserRegisterForm'
import Header from './Components/Header';
import ConnexionContainer from './Components/Connexion/ConnexionContainer';

function App() {
  return (
    <div className='app'>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/login' component={ConnexionContainer} />
        <Route path='/UserForm' component={UserRegisterForm} />
        <Route path='/dashboard' component={UserDashboard} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
