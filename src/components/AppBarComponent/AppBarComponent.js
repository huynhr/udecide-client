import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

function AppBarComponent() {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="static">
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