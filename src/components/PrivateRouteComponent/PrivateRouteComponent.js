import React, {useContext} from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { store } from '../../store/store';

function PrivateRouteComponent({ children, ...rest }) {
  const {state} = useContext(store)
  console.log('children: ', children);
  console.log('rest: ', rest);
  return (
    <Route
      {...rest}
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