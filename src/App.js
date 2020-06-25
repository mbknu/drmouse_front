import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import UserDashboard from './components/UserDashboard'
import UserRegisterForm from './components/UserRegisterForm'
import Header from './components/Header';
import ConnexionContainer from './components/Connexion/ConnexionContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={ConnexionContainer} />
        <Route exact path='/UserForm' component={UserRegisterForm} />
        <Route exact path='/dashboard' component={UserDashboard} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
