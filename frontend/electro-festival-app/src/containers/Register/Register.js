import React, {Component} from 'react';
import PropTypes from 'prop-types';



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
import validation from '../../validators/Register.validator';



//Thirty-components

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
class Register extends Component {
  constructor(props) {
    super(props)
    
    //state
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      birthDay: '',
      password: '',  
      showPassword: false,
      // error:false,
      helpText: '',
      erroMessage : [
        { "firstName": "First Name is requried", error: false},
        {"lastName": "Last Name is required", error: false}
      ]
      // edad: 0,
    };
  };

  //validation
  handleBlur(event, inputField) {

    if (inputField === "firstName") {
      if (event.target.value === '') {
        this.setMessageError(this.state.erroMessage, inputField)
        // this.setState({ errorMessage: true})
      } else {
        this.setState({error: false})
      }
    }
    if (inputField === "lastName") {
      if (event.target.value === '') {
        this.setMessageError(this.state.erroMessage, inputField)
        // this.setState({ errorMessage: true})
      } else {
        this.setState({error: false})
        }
      }
    }
    
    



  //   if (event.target.value === '') {
  //     if (inputField === "firstName") {
  //       this.setState({error: true})
  //       this.setState({
  //         helpText: this.filterMessage(this.erroMessage, inputField)[0]
  //       })
  //   } else if (inputField === "lastName"){
  //       this.setState({error: true})
  //       this.setState({
  //         helpText: this.filterMessage(this.erroMessage, inputField)[0]
  //       })
  //     } else {
  //       this.setState({error: false, helperText:''})
  //       }
  //   } 
  // }
  

  setMessageError(erroMessage, inputField) {
    const errorFilter = erroMessage.filter((data) => data[inputField])
    console.log(this.state.erroMessage.slice())
    // this.setState(errorFilter[0].error:true)
    return errorFilter[0]
  }
  
//   var countriesFiltered = Object.keys(countries).filter(function(key) {
//     return key === "China";
// }).map(function(key) {
//     return countries[key];
// });

  //password
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
    let errorMessage = this.state.erroMessage;
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
                      onBlur={(event) => this.handleBlur(event, "firstName")}
                      required
                      error={errorMessage[0].error}
                      label="First Name"
                      helperText={this.state.helpText}
                      autoFocus
                      value={this.state.firstName}
                      onChange={event => this.setState({"firstName": event.target.value})}
                    />
                  </FormControl>
                  <FormControl required className={classes.formControl}>
                    <TextField
                      onBlur={(event) => this.handleBlur(event, "lastName")}
                      required
                      error={this.state.error}
                      label="Last Name"
                      helperText={this.state.helpText}
                      value={this.state.lastName}
                      onChange={event => this.setState({ "lastName": event.target.value })}
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

Register.protoTypes = {
  errors: PropTypes.object,
  validate: PropTypes.func,
  isValid: PropTypes.func,
  handleValidation: PropTypes.func,
  getValidationMessages: PropTypes.func,
  clearValidations: PropTypes.func,
}




export default withStyles(styles)(Register)









