import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Components/HomePage';
import UserDashboard from './Components/UserDashboard';
import UserRegisterForm from './Components/UserRegisterForm';
import ConnexionContainer from './Components/Connexion/ConnexionContainer';
import Header from './Components/Header';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route path='/' component={HomePage} exact />
      </Switch>
      <Switch>
        <Route path='/login' component={ConnexionContainer} />
      </Switch>
      <Switch>
        <Route path='/UserForm' component={UserRegisterForm} />
      </Switch>
      <Switch>
        <Route path='/dashboard' component={UserDashboard} />
      </Switch>
    </div>
  );
};

export default App;
