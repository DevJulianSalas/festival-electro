import React from 'react';


//Material-ui components
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FormControl from 'material-ui/Form/FormControl';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';


// Own components
import userCrudApi from '../../api/user';


//Validation forms component
import validation from 'react-validation-mixin'; 



const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',

  },
  formControl: {
    margin: theme.spacing.unit * 1,
    width: "500px",
    paddingLeft: "10px",
    color: "#009688"
  },

  inputLabel: {
    paddingLeft: "10px"
  },

  typography: {
    backgroundColor: "#009688",
    paddingBottom: "10px",
    "color": "white"
  },

  paper: {
    height: "100%",
    width: "550px",
  },

  button: {
    margin: theme.spacing.unit * 2,
    width: "95%",
    paddingRigth: "22px !important",
    backgroundColor: "#009688",

  },

  focused: {
    color: "#009688"
  },
  underline: {
    backgroundColor: '#0f0',
  },

  rightIcon: {
    marginLeft: theme.spacing.unit,
  },

  textField: {
    width: 500,
  },

});
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      birthDay: '',
      password: '',  
      showPassword: false
      // edad: 0,
    };
  }
  
  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  register(event) {
    userCrudApi.create(this.state)
      .then((res) => {
        console.log(res)
        if (res.error) {
          console.log("bad request")
        } else {
          console.log("good request")
        }
      });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    }
  
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            justify="center"
            style={{
              height: "560px",
              "paddingTop": "30px",
            }}
          >
            <Grid item>
              <Paper className={classes.paper}>
                <Typography className={classes.typography} align="center" variant="headline" gutterBottom>
                  Register
                  </Typography>
                <form action="" onSubmit={this.handleSubmit}>
                  <FormControl required className={classes.formControl}>
                    <TextField
                      required
                      label="First Name"
                      autoFocus
                      value={this.state.firstName}
                      onChange={event => this.setState({"firstName": event.target.value})}
                    />
                  </FormControl>
                  <FormControl required className={classes.formControl}>
                    <InputLabel 
                      className={classes.inputLabel} 
                      htmlFor="name-simple">
                      Last Name
                    </InputLabel>
                    <Input 
                      value={this.state.name} 
                      onChange={event => this.setState({"lastName": event.target.value})} 
                    />
                  </FormControl>
                  <FormControl required className={classes.formControl}>
                    <InputLabel 
                      className={classes.inputLabel} 
                      htmlFor="name-simple">
                      UserName
                    </InputLabel>
                    <Input 
                      onChange={event => this.setState({"userName": event.target.value})}
                    />
                  </FormControl>
                  <FormControl required className={classes.formControl}>
                    <InputLabel 
                      className={classes.inputLabel} 
                      htmlFor="name-simple">
                      Email
                    </InputLabel>
                    <Input 
                      type="email"
                      // value={this.state.name} 
                      onChange={event => this.setState({"email": event.target.value})} 
                    />
                  </FormControl>
                  <FormControl required className={classes.formControl}>
                    <TextField
                      id="date"
                      label="Birthday"
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      onChange={event => this.setState({"birthDay": event.target.value})}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                  <FormControl required className={classes.formControl}>
                    <InputLabel 
                      
                      className={classes.inputLabel} 
                      htmlFor="name-simple">
                      Password
                    </InputLabel>
                    <Input 
                      type={this.state.showPassword ? 'text' : 'password'}
                      // value={this.state.name} 
                      onChange={event => this.setState({"password": event.target.value})}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={this.handleClickShowPasssword}
                            onMouseDown={this.handleMouseDownPassword}
                          >
                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <Button 
                    className={classes.button} 
                    variant="raised"
                    type="submit"
                    onClick={event => this.register()}
                    color="primary"
                  >
                    Submit
                    <Icon 
                      className={classes.rightIcon}
                    >
                      send
                    </Icon>
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    )
  }
}



export default withStyles(styles)(Register);









//3175780256