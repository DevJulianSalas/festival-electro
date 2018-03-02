//React components
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'


// Material-ui components
import Button from 'material-ui/Button';
import AccountCircle from 'material-ui-icons/AccountCircle';


class MenuRegister extends React.Component {
  state = {
    anchorEl: null
  }
  handleClickOpen = () => {
    this.setState({ open: true});
  }
  
  handleClose = () => {
    this.setState({ open: false});
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <Button
              aria-haspopup="true"
              onClick={this.handleClickOpen}
              color="inherit"
              component={Link} to="/register"
            >
            <AccountCircle/>
          </Button>
        </BrowserRouter>
      </div>
    )
  }
}    


export default MenuRegister;
