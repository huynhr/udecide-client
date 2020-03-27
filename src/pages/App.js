import React, {useContext} from 'react';
import AppBarComponent from '../components/AppBarComponent/AppBarComponent';
import {store} from '../store/store';

function App() {
  const {state, dispatch} = useContext(store)
  console.log('state: ', state)
  return (
    <React.Fragment>
      <AppBarComponent />
    </React.Fragment>
  );
}

export default App;