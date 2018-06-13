import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  colorPrimary: '#fafafa'
}


class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "Julian"
    }
  }

  render() {
    const { classes } = this.props
    return(
      <div>
        <AppBar position="static" color={classes.colorPrimary}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              <NavLink to="/">Home</NavLink>
            </Typography>
            <Button color="inherit"><NavLink to="/evento">crea un evento</NavLink></Button>
            <Button color="inherit"><NavLink to="/registrarse">Registrarse</NavLink></Button>
            <Button color="inherit"><NavLink to="/Ingresar">Ingresar</NavLink></Button>
          </Toolbar>
        </AppBar>
      </div>
      
    );
  }
}

export default withStyles(styles)(Header);


