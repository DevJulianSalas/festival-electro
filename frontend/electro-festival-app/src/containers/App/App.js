//React 
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';




//Own 
import Header from '../../components/Header';
import Register from '../Register'

//Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const App = () => (
    <MuiThemeProvider>
      <div>
        <Header/>
        <div className="app">
          <main>
          <BrowserRouter>
              <Switch>
                <Route exact path='/register' component={Register}/>
              </Switch>
          </BrowserRouter>
          </main>
        </div>
      </div>
    </MuiThemeProvider>
)
export default App;