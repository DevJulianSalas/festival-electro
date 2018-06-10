import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';




const styles = theme => ({
  
  root: {
    flexGrow: 1,
  },
  container:{
    display: "flex",
    position: "absolute",
    top: 50,
    left: 50,
  },
  submit:{
    "background-color": "red",
  }
  
})



class Register extends React.Component {
    render() {
      const { classes } = this.props;
        return (
          <div className={classes.root}>
            <Grid
              container
              justify="center"
              wrap="wrap"

            >
              <Grid item xs={12} sm={4}>
                <Card xs={12}>
                  <form xs={12}>
                    <CardContent>
                      <IconButton>
                        <i className="fab fa-facebook-square"/>
                      </IconButton>
                      <IconButton>
                        <i className="fab fa-twitter-square"/>
                      </IconButton>
                      <IconButton>
                        <i className="fab fa-instagram"/>
                      </IconButton>
                      <div>
                        <TextField
                          fullWidth
                          id="email"
                          label="Email"
                          margin="normal"
                          InputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon>email</Icon>
                              </InputAdornment>
                            )
                          }}
                        >
                        </TextField>
                        <TextField
                          fullWidth
                          id="username"
                          label="Username"
                          margin="normal"
                          InputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon>people</Icon>
                              </InputAdornment>
                            )
                          }}
                        >
                        </TextField>
                        <TextField
                          fullWidth
                          id="password"
                          label="Password"
                          margin="normal"
                          InputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon>vpn_key</Icon>
                              </InputAdornment>
                            )
                          }}
                        >
                        </TextField>
                        <Button 
                          simple color="primary" size="lg"
                          color="default" variant="contained" 
                        >
                          Go Head!
                        </Button>
                      </div>
                    </CardContent>
                  </form>
                </Card>

              </Grid>
            </Grid>  
          </div>
          // <Grid
          //   container
          //   spacing={16}
          //   direction="column"
          //   className={ classes.container} 
          // >
          //   <Grid item xs={12}>
          //     <Card className={ classes.card}>
          //       <form xs={12}>
          //         <CardHeader/>
          //           <IconButton>
          //             <i className="fab fa-facebook-square"/>
          //           </IconButton>
          //           <IconButton>
          //             <i className="fab fa-twitter-square"/>
          //           </IconButton>
          //           <IconButton>
          //             <i className="fab fa-instagram"/>
          //           </IconButton>
          //           <CardContent>
          //             <TextField
          //               id="username"
          //               label="Username"
          //               margin="normal"
          //             >
          //             </TextField>
          //             <TextField
          //               id="email"
          //               label="Email"
          //               margin="normal"
          //             >
          //             </TextField>
          //             <TextField
          //               id="password"
          //               label="Password"
          //               margin="normal"
          //             >
          //             </TextField>
          //           </CardContent>
          //         </form>
          //     </Card>
          //   </Grid>
          // </Grid>
            
        );
    }
}

export default withStyles(styles)(Register);
