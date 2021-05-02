import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './landingPage';
import JoinPlaylistPage from './joinPlaylistPage';
import HomePage from './homePage';
import HostLoginPage from './hostLoginPage';
function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/joinplaylist">
          <JoinPlaylistPage />
        </Route>

        <Route path="/host">
          <HostLoginPage />
        </Route>

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
