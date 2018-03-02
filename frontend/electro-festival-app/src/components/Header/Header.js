//React
import React from 'react';
import PropTypes from 'prop-types';

//Helper components
import MenuRegister from './MenuRegister';

//Material-ui components
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
    
  },
  colorPrimary:{
    background: "#009688"
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;

  return (
    <Grid className={classes.root}>
      <AppBar position="static" className={classes.colorPrimary}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
          </IconButton>
          <Typography align="center" variant="title" color="inherit" className={classes.flex}>
            Electro Festival
          </Typography>
          <MenuRegister></MenuRegister>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);