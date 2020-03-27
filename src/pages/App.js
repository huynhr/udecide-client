import React, {useContext} from 'react';
import { Route } from "react-router-dom";
import PrivateRoute from '../components/PrivateRouteComponent/PrivateRouteComponent';
import LoginPage from './login/LoginPage';
import HomePage from './home/homePage';
import {store} from '../store/store';

function App() {
  const { state } = useContext(store)

  console.log('state: ', state)
  return (
    <React.Fragment>
      <Route path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute exact path="/">
        <HomePage />
      </PrivateRoute>
    </React.Fragment>
  );
}

export default App;