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


const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',

  },
  formControl: {
    margin: theme.spacing.unit*1,
    width: "500px",
    paddingLeft: "10px",
    color: "#009688"
  },
  
  inputLabel: {
    paddingLeft: "10px"
  },

  typography:{
    backgroundColor: "#009688",
    paddingBottom: "10px",
    "color": "white"
  },
  
  paper: {
    height:"100%",
    width:"550px",
  },

  button: {
    margin: theme.spacing.unit*2,
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
  
});
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      firstName: '',
      name: '',
      last_name: '',
      password:'',
      edad:0,
      email: '',
      showPassword: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (prop) => event =>{
      this.setState({[prop]: event.target.value})
    }

    handleSubmit(event) {
      alert(this.state.value)
      event.preventDefault()
    }

    render(){
      const { classes } = this.props;
      return(
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid 
              container
              justify="center"          
              style={{
                height:"700px",
                "paddingTop":"30px",
              }}
            >
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography className={classes.typography} align="center" variant="headline" gutterBottom>
                    Register
                  </Typography>
                  <FormControl  required className={classes.formControl}>
                    <InputLabel  
                      classes={{underline: classes.focused}} 
                      className={classes.inputLabel} 
                      htmlFor="name-simple">
                      First Name
                    </InputLabel>
                    <Input 
                      classes={{underline: classes.focused}} 
                      id="name-simple" 
                      value={this.state.firstName} 
                      onChange={this.handleChange}
                    />
                  </FormControl>
                  <FormControl  required className={classes.formControl}>
                    <InputLabel className={classes.inputLabel} htmlFor="name-simple">Last Name</InputLabel>
                    <Input id="name-simple" value={this.state.name} onChange={this.handleChange}/>
                  </FormControl>
                  <FormControl  required className={classes.formControl}>
                    <InputLabel className={classes.inputLabel} htmlFor="name-simple">UserName</InputLabel>
                    <Input id="name-simple" value={this.state.name} onChange={this.handleChange}/>
                  </FormControl>
                  <FormControl  required className={classes.formControl}>
                    <InputLabel className={classes.inputLabel} htmlFor="name-simple">Email</InputLabel>
                    <Input id="name-simple" value={this.state.name} onChange={this.handleChange}/>
                  </FormControl>
                  <FormControl  required className={classes.formControl}>
                    <InputLabel className={classes.inputLabel} htmlFor="name-simple">Birth Day</InputLabel>
                    <Input id="name-simple" value={this.state.name} onChange={this.handleChange}/>
                  </FormControl>
                  <FormControl  required className={classes.formControl}>
                    <InputLabel className={classes.inputLabel} htmlFor="name-simple">Age</InputLabel>
                    <Input id="name-simple" value={this.state.name} onChange={this.handleChange}/>
                  </FormControl>
                  <FormControl  required className={classes.formControl}>
                    <InputLabel className={classes.inputLabel} htmlFor="name-simple">Password</InputLabel>
                    <Input id="name-simple" value={this.state.name} onChange={this.handleChange}/>
                  </FormControl>
                  <FormControl  className={classes.formControl}>
                    <InputLabel className={classes.inputLabel} htmlFor="name-simple">Repeat Password</InputLabel>
                    <Input id="name-simple" value={this.state.name} onChange={this.handleChange}/>
                  </FormControl>
                  <Button className={classes.button} variant="raised" color="primary">
                      Send
                    <Icon className={classes.rightIcon}>send</Icon>
                  </Button>
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