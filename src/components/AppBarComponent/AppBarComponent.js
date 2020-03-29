import React, { Fragment, useContext } from 'react';
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import axios from 'axios';
import { GoogleLogin } from "react-google-login";

import styles from './styles';
import { store } from '../../store/store';
import actionTypes from '../../store/actionTypes';

function AppBarComponent({ history }) {
  const classes = styles();
  const { state, dispatch } = useContext(store);

  const googleResponse = async(response) => {
    if (process.env.REACT_APP_ENV === 'production') {
      dispatch({type: actionTypes.AUTHENTICATED_UPDATE, payload: true});
    } else {

      const payload = {
        access_token: response.accessToken,
        userProfile: response.profileObj
      };
  
      const api_url = process.env.REACT_APP_ENV === "production"
          ? process.env.REACT_APP_API_PRODUCTION
          : process.env.REACT_APP_API_SANDBOX;
  
      const api_response = await axios.post(`${api_url}/auth`, payload);
      if (api_response.headers["x-auth-token"]) {
        console.log("response: ", api_response);
        dispatch({ type: actionTypes.AUTHENTICATED_UPDATE, payload: true });
        dispatch({
          type: actionTypes.JWT_UPDATE,
          payload: api_response.headers["x-auth-token"]
        });
      } else {
        dispatch({ type: actionTypes.AUTHENTICATED_UPDATE, payload: false });
        onFailure();
      }
    }
    history.push('/')
  }

  const onFailure = (err) => {
    console.log('error: ', err)
    alert('Failed authentication!');
  }

  return (
    <Fragment>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            udecide
          </Typography>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={googleResponse}
            onFailure={onFailure}
          />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default AppBarComponent;
