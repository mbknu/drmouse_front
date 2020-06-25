import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import UserDashboard from './components/UserDashboard'
import UserRegisterForm from './components/UserRegisterForm'
import Header from './components/Header';
import ConnexionContainer from './components/Connexion/ConnexionContainer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={ConnexionContainer} />
        <Route path='/UserForm' component={UserRegisterForm} />
        <Route path='/dashboard' component={UserDashboard} />
      </Switch>
    </div>
  );
};

export default App;
