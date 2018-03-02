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
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


//Override color primary from theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
    },
  },
});


const App = () => (
  <MuiThemeProvider theme={theme}>
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