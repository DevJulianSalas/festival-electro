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
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root:{
    flexGrow:1,
    "padding-top":50,
  },
  
})


class Register extends React.Component {
    render() {
      const { classes } = this.props;
        return (
          <Grid 
            container className={classes.root}
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid item xs={12} sm={4}>
              <form xs={12}>
                  <Card xs={12}>
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
                          color="primary"
                          color="default" variant="contained"

                        >
                          Go Head!
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </form>
            </Grid>
          </Grid>
          
        );
    }
}

export default withStyles(styles)(Register);
