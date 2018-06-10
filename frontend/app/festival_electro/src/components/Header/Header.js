import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  colorPrimary: 'default'
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
    console.log(classes)
    return(
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Title
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

