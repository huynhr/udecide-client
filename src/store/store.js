import React, { createContext, useReducer } from 'react';
import actionTypes from './actionTypes';

const initialState = {
  isAuthenticated: false,
  jwtToken: '',
  isProduction: false
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actionTypes.AUTHENTICATED_UPDATE:
        return { ...state, isAuthenticated: action.payload };
      case actionTypes.JWT_UPDATE:
        return { ...state, jwtToken: action.payload };
      case actionTypes.ENV_UPDATE:
        return { ...state, isProduction: action.payload };
      default:
        return { ...state };
    }
  }, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>
};

export { store, StateProvider }