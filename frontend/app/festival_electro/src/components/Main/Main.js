import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Register from '../Register/Register'
import Home from '../Home/Home'

class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <Switch>
        <Route exact path="/registrarse" component={Register}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    )
  }
}

export default Main;