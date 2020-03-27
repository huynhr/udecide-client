import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { StateProvider } from './store/store';
import { MuiThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './pages/App';


ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <StateProvider>
        <App />    
      </StateProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

