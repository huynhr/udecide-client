import React, {useContext} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from './login/LoginPage';
import HomePage from './home/homePage';
import {store} from '../store/store';

function App() {
  const {state, dispatch} = useContext(store)
  console.log('state: ', state)
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;