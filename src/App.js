import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import UserDashboard from './components/UserDashboard'
import Login from './components/Login'
import UserRegisterForm from './components/UserRegisterForm'
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/UserForm' component={UserRegisterForm} />
        <Route path='/dashboard' component={UserDashboard} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
