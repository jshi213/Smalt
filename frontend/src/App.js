import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './landingPage';
import JoinPlaylistPage from './joinPlaylistPage';
import HomePage from './homePage';
<<<<<<< HEAD
import HostLoginPage from './hostLoginPage';
=======

>>>>>>> c39dc8d8282dd01b85a8b6991e3f91d76eae7c8c
function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/joinplaylist">
          <JoinPlaylistPage />
        </Route>

<<<<<<< HEAD
        <Route path="/host">
          <HostLoginPage />
        </Route>

=======
>>>>>>> c39dc8d8282dd01b85a8b6991e3f91d76eae7c8c
        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="*">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
