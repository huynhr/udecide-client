import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { store } from '../../store/store';

function PrivateRouteComponent({ children, ...rest }) {
  const { state } = useContext(store)
  return (
    <Route
      { ...rest }
      render={() =>
        state.isAuthenticated ? (
          children
        ) : (
          <Redirect to="/login"/>
        )
      }
    />
  );
}

export default PrivateRouteComponent;