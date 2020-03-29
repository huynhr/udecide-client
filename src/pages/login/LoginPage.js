import React, {Fragment} from 'react';
import AppBarComponent from '../../components/AppBarComponent/AppBarComponent';

function LoginPage(props) {
  return (
    <Fragment>
      <AppBarComponent {...props}/>
    </Fragment>
  )
}

export default LoginPage;