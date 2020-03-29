import React, { useContext, useEffect } from 'react';
import { Route } from "react-router-dom";
import PrivateRoute from '../components/PrivateRouteComponent/PrivateRouteComponent';
import LoginPage from './login/LoginPage';
import HomePage from './home/homePage';
import { store } from '../store/store';
import actionTypes from '../store/actionTypes';

function App() {
  const { state } = useContext(store)
  // useEffect(() => {
  //   dispatch({
  //     type: actionTypes.ENV_UPDATE,
  //     payload: process.env.REACT_APP_ENV == 'production'
  //   });
  // });
  return (
    <React.Fragment>
      <Route path="/login" render={routeProps => <LoginPage {...routeProps} />} />
      <PrivateRoute exact path="/">
        <HomePage />
      </PrivateRoute>
    </React.Fragment>
  );
}

export default App;