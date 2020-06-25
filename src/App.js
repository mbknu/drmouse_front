import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage'
import UserDashboard from './components/UserDashboard'
import Login from './components/Connexion/Login'
import UserRegisterForm from './components/UserRegisterForm'
import Header from './components/Header';
import ConnexionContainer from './components/Connexion/ConnexionContainer';

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
