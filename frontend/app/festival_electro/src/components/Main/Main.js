import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Register from '../Register/Register'

class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <Switch>
        <Route exact path="/registrarse" component={Register}></Route>
      </Switch>
    )
  }
}

export default Main;