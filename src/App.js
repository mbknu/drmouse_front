import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Components/HomePage';
import UserDashboard from './Components/UserDashboard';
import ConnexionContainer from './Components/Connexion/ConnexionContainer';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path='/' component={HomePage} exact />
      </Switch>
      <Switch>
        <Route path='/login' component={ConnexionContainer} />
      </Switch>
      <Switch>
        <Route path='/dashboard' component={UserDashboard} />
      </Switch>
    </>
  );
};

export default App;
