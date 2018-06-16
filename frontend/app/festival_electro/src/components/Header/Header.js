import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { Grid } from '@material-ui/core';


const styles = {
  root:{
    flexGrow: 1,
  },
  flex:{
    flex: 1
  },
  colorPrimary: '#fafafa',

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
      <div className={classes.root}>
        <AppBar position="static" color="primary" >
          <Toolbar alignItems="center" direction="column">
            <div className={classes.flex}>
              <Link to="/"><img src="" alt="Logo"/></Link>
            </div>
            <nav>
              <ul>
                <Link to="/notificaciones"><i class="far fa-bell"></i>Notificaciones</Link>
                <Link to="/iniciar-sesion"><i class="fas fa-sign-in-alt"></i>Iniciar sesion</Link>
                <Link to="/registrarse"><i class="fas fa-user-plus"></i>Registrarse</Link>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);


