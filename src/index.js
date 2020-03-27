import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { StateProvider } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />    
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

