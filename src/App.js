import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage'
import UserDashboard from './Components/UserDashboard'
import Login from './Components/Login'
import UserRegisterForm from './Components/UserRegisterForm'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
      <Switch>
        <Route path='/UserForm' component={UserRegisterForm} />
      </Switch>
      <Switch>
        <Route path='/dashboard' component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
