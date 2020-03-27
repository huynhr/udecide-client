import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { StateProvider } from './store/store';
import { MuiThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from "react-router-dom";
import theme from './theme';
import App from './pages/App';


ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <StateProvider>
          <App />    
        </StateProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

