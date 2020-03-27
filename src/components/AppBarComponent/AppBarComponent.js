import React, { Fragment } from 'react';
import styles from './styles';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

function AppBarComponent() {
  const classes = styles();
  return (
    <Fragment>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            udecide
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default AppBarComponent;

// <Toolbar>
//   <IconButton
//     edge="start"
//     className={classes.menuButton}
//     color="inherit"
//     aria-label="menu"
//   >
//     <MenuIcon />
//   </IconButton>
//   <Typography variant="h6" className={classes.title}>
//     News
//   </Typography>
//   <Button color="inherit">Login</Button>
// </Toolbar>;